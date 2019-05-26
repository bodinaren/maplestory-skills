import { h, EventEmitter } from "@stencil/core";
import { IClassSkills, ISkillRequirement, ISkillBase, Rank } from "../../global/values/_skillValues.interfaces";
import { ISkillChangeEvent } from "./skill-change-event";
import { MAX_POINTS_RANK_1, MAX_POINTS_RANK_2 } from "../../global/values/_general";

/**
 * Verify that all distributed points are valid and correct incorrect ones.
 * * If a skill has changed, but the requirements are not met, the level of the required skills will also be added.
 * * If the skillchange resulted in a too high sum (e.g. over 68 distributed points), the points will be reduced to the maximum points available.
 * @param chart The chart that uses this skill (usually `this`)
 * @param classSkills All the skills for the relevant class
 * @param skillChanged Which skill has changed, if any.
 */
export function processSkills(chart: IChart, classSkills: IClassSkills, skillChanged?: ISkillBase) {

  let skills = {};
  let sumRank1 = 0;
  let sumRank2 = 0;

  if (skillChanged && chart[skillChanged.prop] > 0) {
    if (skillChanged.skillRequirements) {
      // make sure to add the minimum level to required skills
      skillChanged.skillRequirements.forEach((req) => {
        fixRequirements(chart, req);
      });
    }
  }

  // calculate sum and resets locked/required/limitReached
  Object.keys(classSkills).forEach((skillKey: string) => {
    let skill = classSkills[skillKey];

    if (skill.rank === Rank.Basic) {
      sumRank1 += chart[skill.prop];
    } else {
      sumRank2 += chart[skill.prop];
    }

    skills[skill.prop] = {
      locked: false,
      required: undefined,
      limitReached: false,
    };
  });

  if (skillChanged && skillChanged.rank === Rank.Basic && sumRank1 > MAX_POINTS_RANK_1) {
    // if the sum is too high, reduce the amount of points in the changedSkill to the maximum points that are available.
    chart[skillChanged.prop] -= sumRank1 - MAX_POINTS_RANK_1;
  }
  if (skillChanged && skillChanged.rank === Rank.Awakening && sumRank2 > MAX_POINTS_RANK_2) {
    // if the sum is too high, reduce the amount of points in the changedSkill to the maximum points that are available.
    chart[skillChanged.prop] -= sumRank2 - MAX_POINTS_RANK_2;
  }

  Object.keys(classSkills).forEach((skillKey: string) => {
    let skill = classSkills[skillKey];

    if (skill.skillRequirements) {
      skill.skillRequirements.forEach((req) => {
        if (chart[req.skill.prop] < req.level) {
          // the skill's requirements are not met, set back to 0.
          skills[skill.prop].locked = true;
          chart[skill.prop] = 0;
        }
      });
    }

    if (skill.rank === Rank.Basic) {
      skills[skill.prop].limitReached = (sumRank1 >= MAX_POINTS_RANK_1);
    } else {
      skills[skill.prop].limitReached = (sumRank2 >= MAX_POINTS_RANK_2);
    }
    
    if (chart[skill.prop] === 0) {
      let requiredPoints = calculateRequiredPoints(chart, skill);
      if (skill.rank === Rank.Basic) {
        if (requiredPoints + 1 > MAX_POINTS_RANK_1 - sumRank1) { // + 1, because we need to have any points left AFTER meeting the requirements
          skills[skill.prop].limitReached = true;
        }
      } else {
        if (requiredPoints + 1 > MAX_POINTS_RANK_2 - sumRank2) { // + 1, because we need to have any points left AFTER meeting the requirements
          skills[skill.prop].limitReached = true;
        }
      }
    }
  });

  // console.log(chart.skills, skills, chart.skills === skills);

  chart.skills = skills;
}

export function toggleSkillRequirements(chart: any, skill: any, setActive: boolean) {
  if (skill.skillRequirements) {
    let didUpdate = false;
    skill.skillRequirements.forEach((req) => {
      if (chart[req.skill.prop] < req.level) {
        let r = (setActive) ? `Level ${ req.level }+` : undefined;
        if (chart.skills[req.skill.prop].required !== r) {
          chart.skills[req.skill.prop].required = r;
          didUpdate = true;
        }
      }
    });
    // simply a performance thing, don't trigger a re-render unless there was an actual change.
    if (didUpdate) chart.skills = {...chart.skills};
  }
}

export function renderLevelControls(chart: IChart, classSkills: IClassSkills, editable: boolean, extras: boolean = false, rank: Rank = Rank.Basic, additionalArgs?: any) {
  return Object.keys(classSkills).map((key) => {
    let skill: ISkillBase = classSkills[key];
    let chartSkill = chart.skills[skill.prop];
    return (
      <ms-skill slot={ "rank-" + rank }
                class={ skill.prop }
                skill={ skill }
                level={ chart[skill.prop] }
                locked={ chartSkill.locked }
                required={ chartSkill.required }
                limitReached={ chartSkill.limitReached }
                disabled={ !editable }
                loop={ editable }
                onLevelchanged={ (evt) => chart.levelChanged(skill, evt.detail) }
                onMouseEnter={ () => chartSkill.locked && toggleSkillRequirements(chart, skill, true) }
                onMouseLeave={ () => chartSkill.locked && toggleSkillRequirements(chart, skill, false) }
                extras={ extras }
                { ...additionalArgs }>
      </ms-skill>
    );
  });
}

export function toSkillChangeEventObject(chart: any, classSkills: IClassSkills, other?: { [key: string]: string }): ISkillChangeEvent {
  let rs: ISkillChangeEvent = {
    rank: chart.rank,
    skills: Object.keys(classSkills).map((key) => {
      let skill = classSkills[key];
      return {
        skill: skill.name,
        attr: skill.attr,
        prop: skill.prop,
        level: chart[skill.prop],
        minLevel: skill.minLevel,
        maxLevel: skill.maxLevel,
        rank: skill.rank,
      };
    }),
  };

  if (other) {
    rs.other = Object.keys(other).map((key) => ({ attr: key, value: other[key] }));
  }

  return rs;
}

function fixRequirements(chart: IChart, req: ISkillRequirement) {
  if (chart[req.skill.prop] < req.level) {
    chart[req.skill.prop] = req.level;
  }
  if (req.skill.skillRequirements) {
    req.skill.skillRequirements.forEach((r) => {
      fixRequirements(chart, r);
    });
  }
}

function calculateRequiredPoints(chart: IChart, skill: ISkillBase): number {
  let requiredPoints: { [prop: string]: number } = {};

  if (!skill.skillRequirements) return 0;

  iterate(skill);

  let sum = Object.keys(requiredPoints).reduce((sum, key) => {
    return sum + requiredPoints[key];
  }, 0);

  return sum;

  function iterate(skill: ISkillBase) {
    skill.skillRequirements.forEach((req) => {
      let additionalPointsNeeded = Math.max(0, req.level - chart[req.skill.prop]);

      if (!requiredPoints[req.skill.prop] || requiredPoints[req.skill.prop] < additionalPointsNeeded) {
        requiredPoints[req.skill.prop] = additionalPointsNeeded;
      }
      
      if (req.skill.skillRequirements) iterate(req.skill);
    });
  }
}

export interface IChart {
  editable: boolean;
  extras: boolean;
  onSkillChanged: EventEmitter;
  skills: IChartSkills;

  getData(): Promise<ISkillChangeEvent>;
  levelChanged(skill: ISkillBase, level: number): void;
}

export interface IChartSkills {
  [prop: string]: {
    /** If the skill should be "locked" due to unmet requirements */
    locked: boolean,

    /** Triggers the "Level +3" overlay if the skill is locked */
    required: string,

    /** If the skill cannot be added to due to having reached the maximum amount of total points across all skills (68 + 4) */
    limitReached: boolean,
  };
}
