import { h } from '../maplestory-skills.core.js';

function processSkills(chart, classSkills) {
    let skills = {};
    let sum = 0;
    Object.keys(classSkills).forEach((skillKey) => {
        let values = classSkills[skillKey];
        sum += chart[values.prop];
        skills[values.prop] = {
            locked: false,
            required: undefined,
            limitReached: false,
        };
    });
    Object.keys(classSkills).forEach((skillKey) => {
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
function toggleSkillRequirements(chart, skill, setActive) {
    if (skill.skillRequirements) {
        let didUpdate = false;
        skill.skillRequirements.forEach((req) => {
            if (chart[req.skill.prop] < req.level) {
                let r = (setActive) ? `Level ${req.level}+` : undefined;
                if (chart.skills[req.skill.prop].required !== r) {
                    chart.skills[req.skill.prop].required = r;
                    didUpdate = true;
                }
            }
        });
        if (didUpdate)
            chart.skills = Object.assign({}, chart.skills);
    }
}
function renderLevelControls(chart, skills, editable, extras = false, additionalArgs) {
    return Object.keys(skills).map((key) => {
        let skill = skills[key];
        let chartSkill = chart.skills[skill.prop];
        return (h("ms-skill", Object.assign({ class: skill.prop, skill: skill, level: chart[skill.prop], locked: chartSkill.locked, required: chartSkill.required, limitReached: chartSkill.limitReached, disabled: !editable, onLevelchanged: (evt) => chart.levelChanged(skill, evt.detail), onMouseEnter: () => chartSkill.locked && toggleSkillRequirements(chart, skill, true), onMouseLeave: () => chartSkill.locked && toggleSkillRequirements(chart, skill, false), extras: extras }, additionalArgs)));
    });
}
function toSkillChangeEventObject(chart, classSkills, other) {
    let rs = {
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

export { processSkills as a, toSkillChangeEventObject as b, renderLevelControls as c };
