
export function processSkills(chart: any, classValues: any) {
  let skills = {};

  Object.keys(classValues).forEach((skillKey: string) => {
    let values = classValues[skillKey];

    skills[values.prop] = {
      locked: false,
      required: undefined,
      limitReached: false,
    };
  });

  Object.keys(classValues).forEach((skillKey: string) => {
    let values = classValues[skillKey];

    values.skillRequirements.forEach((req) => {
      if (chart[req.skill.prop] < req.level) {
        skills[values.prop].locked = true;
        chart[values.prop] = 0;
      }
    });
  });

  let sum = 0;

  Object.keys(classValues).forEach((skillKey: string) => {
    let values = classValues[skillKey];
    sum += chart[values.prop];
  });

  if (sum >= 68 + 4) { // 4 skills are already distributed and can't be removed
    Object.keys(classValues).forEach((skillKey: string) => {
      let values = classValues[skillKey];
      skills[values.prop].limitReached = true;
    });
  }

  chart.skills = skills;
}

export function toggleSkillRequirements(chart: any, values: any, setActive: boolean) {
  let didUpdate = false;
  values.skillRequirements.forEach((req) => {
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

export function renderLevelControls(chart: any, classValues: any, skillValues: any, editable: boolean, slot: JSX.Element): JSX.Element {
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
                      onLevelchanged={ (evt) => { chart[skillValues.prop] = evt.detail; processSkills(chart, classValues); } }
                      onMouseEnter={ () => skill.locked && toggleSkillRequirements(chart, skillValues, true) }
                      onMouseLeave={ () => skill.locked && toggleSkillRequirements(chart, skillValues, false) }>
      { slot }
    </ms-skill>
  );
}
