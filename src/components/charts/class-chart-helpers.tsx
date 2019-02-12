import { EventEmitter } from "@stencil/core";
import { ISkill } from "../../global/values/_skillValues.interfaces";
import { ISkillChangeEvent } from "./skill-change-event";

export function processSkills(chart: any, classSkills: any) {
  let skills = {};
  let sum = 0;

  Object.keys(classSkills).forEach((skillKey: string) => {
    let values = classSkills[skillKey];

    sum += chart[values.prop];

    skills[values.prop] = {
      locked: false,
      required: undefined,
      limitReached: false,
    };
  });

  Object.keys(classSkills).forEach((skillKey: string) => {
    let values = classSkills[skillKey];

    if (values.skillRequirements) {
      values.skillRequirements.forEach((req) => {
        if (chart[req.skill.prop] < req.level) {
          skills[values.prop].locked = true;
          chart[values.prop] = 0;
        }
      });
    }

    skills[values.prop].limitReached = (sum >= 68 + 4);
  });

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
    if (didUpdate) chart.skills = {...chart.skills};
  }
}

export function renderLevelControls(chart: IChart, skills: ISkill[] | any, editable: boolean, extras: boolean = false, additionalArgs?: any): JSX.Element[] {
  return Object.keys(skills).map((key) => {
    let skill: ISkill = skills[key];
    let chartSkill = chart.skills[skill.prop];
    return (
      <ms-skill class={ skill.prop }
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

export function toSkillChangeEventObject(chart: any, classSkills: { [key: string]: ISkill }, other?: { [key: string]: string }): ISkillChangeEvent {
  let rs: ISkillChangeEvent = {
    skills: Object.keys(classSkills).map((key) => {
      let skill = classSkills[key];
      return {
        skill: skill.name,
        attr: skill.attr,
        prop: skill.prop,
        level: chart[skill.prop],
        minLevel: skill.minLevel,
        maxLevel: skill.maxLevel,
      };
    }),
  };

  if (other) {
    rs.other = Object.keys(other).map((key) => ({ attr: key, value: other[key] }));
  }

  return rs;
}

export interface IChart {
  editable: boolean;
  extras: boolean;
  onSkillChanged: EventEmitter;
  skills: IChartSkills;

  getData(): Promise<ISkillChangeEvent>;
  levelChanged(skill: ISkill, level: number): void;
}

export interface IChartSkills {
  [prop: string]: {
    locked: boolean,
    required: string,
    active: boolean,
    limitReached: boolean,
  }
}
