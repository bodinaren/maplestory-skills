import { ISkill } from "../../global/values/_skillValues.interfaces";

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

    values.skillRequirements.forEach((req) => {
      if (chart[req.skill.prop] < req.level) {
        skills[values.prop].locked = true;
        chart[values.prop] = 0;
      }
    });

    skills[values.prop].limitReached = (sum >= 68 + 4);
  });

  chart.skills = skills;
}

export function toggleSkillRequirements(chart: any, skill: any, setActive: boolean) {
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

export function renderLevelControls(chart: any, skillValues: any, editable: boolean, slot: JSX.Element): JSX.Element {
  let skill = chart.skills[skillValues.prop];

  return (
    <ms-skill class={ skillValues.prop }
                      level={ chart[skillValues.prop] }
                      min={ skillValues.minLevel }
                      max={ skillValues.maxLevel }
                      locked={ skill.locked }
                      required={ skill.required }
                      limitReached={ skill.limitReached }
                      disabled={ !editable }
                      onLevelchanged={ (evt) => chart.levelChanged(skillValues, evt.detail) }
                      onMouseEnter={ () => skill.locked && toggleSkillRequirements(chart, skillValues, true) }
                      onMouseLeave={ () => skill.locked && toggleSkillRequirements(chart, skillValues, false) }>
      { slot }
    </ms-skill>
  );
}

export function renderProperties(chart: any, classSkills: { [key: string]: ISkill }): string {
  return Object.keys(classSkills)
    .map((key) => {
      let skill = classSkills[key];
      if (chart[skill.prop] > skill.minLevel) {
        return `${skill.attr}="${ chart[skill.prop] }"`;
      }
    }).filter((x) => {
      return !!x;
    }).join(" ");
}

export function toSkillChangeObject(chart: any, classSkills: { [key: string]: ISkill }): SkillChangeEvent {
  return Object.keys(classSkills)
    .map((key) => {
      let skill = classSkills[key];
      return {
        skill: skill.name,
        level: chart[skill.prop],
      };
    });
}

export type SkillChangeEvent = Array<{
  /** The name of the skill */
  skill: string;

  /** How many points were put into the skill */
  level: number;
}>;
