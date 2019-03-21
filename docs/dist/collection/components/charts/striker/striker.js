import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as StrikerSkills from "../../../global/values/striker";
export class StrikerComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.beatdown = StrikerSkills.Beatdown.minLevel;
        this.dragonKick = StrikerSkills.DragonKick.minLevel;
        this.fightingSpirit = StrikerSkills.FightingSpirit.minLevel;
        this.fistsOfFury = StrikerSkills.FistsOfFury.minLevel;
        this.giganticBurst = StrikerSkills.GiganticBurst.minLevel;
        this.guardDash = StrikerSkills.GuardDash.minLevel;
        this.guillotine = StrikerSkills.Guillotine.minLevel;
        this.hurricaneCutter = StrikerSkills.HurricaneCutter.minLevel;
        this.kickTechnician = StrikerSkills.KickTechnician.minLevel;
        this.knuckleMissile = StrikerSkills.KnuckleMissile.minLevel;
        this.magnumBlow = StrikerSkills.MagnumBlow.minLevel;
        this.maharPunch = StrikerSkills.MaharPunch.minLevel;
        this.overcome = StrikerSkills.Overcome.minLevel;
        this.paceControl = StrikerSkills.PaceControl.minLevel;
        this.patternBreak = StrikerSkills.PatternBreak.minLevel;
        this.powerPuncher = StrikerSkills.PowerPuncher.minLevel;
        this.risingKick = StrikerSkills.RisingKick.minLevel;
    }
    componentWillLoad() {
        processSkills(this, StrikerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, StrikerSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, StrikerSkills, skill);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, StrikerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "striker" }, renderLevelControls(this, StrikerSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-striker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "beatdown": {
            "type": Number,
            "attr": "beatdown",
            "mutable": true
        },
        "dragonKick": {
            "type": Number,
            "attr": "dragon-kick",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "fightingSpirit": {
            "type": Number,
            "attr": "fighting-spirit",
            "mutable": true
        },
        "fistsOfFury": {
            "type": Number,
            "attr": "fists-of-fury",
            "mutable": true
        },
        "getData": {
            "method": true
        },
        "giganticBurst": {
            "type": Number,
            "attr": "gigantic-burst",
            "mutable": true
        },
        "guardDash": {
            "type": Number,
            "attr": "guard-dash",
            "mutable": true
        },
        "guillotine": {
            "type": Number,
            "attr": "guillotine",
            "mutable": true
        },
        "hurricaneCutter": {
            "type": Number,
            "attr": "hurricane-cutter",
            "mutable": true
        },
        "kickTechnician": {
            "type": Number,
            "attr": "kick-technician",
            "mutable": true
        },
        "knuckleMissile": {
            "type": Number,
            "attr": "knuckle-missile",
            "mutable": true
        },
        "magnumBlow": {
            "type": Number,
            "attr": "magnum-blow",
            "mutable": true
        },
        "maharPunch": {
            "type": Number,
            "attr": "mahar-punch",
            "mutable": true
        },
        "overcome": {
            "type": Number,
            "attr": "overcome",
            "mutable": true
        },
        "paceControl": {
            "type": Number,
            "attr": "pace-control",
            "mutable": true
        },
        "patternBreak": {
            "type": Number,
            "attr": "pattern-break",
            "mutable": true
        },
        "powerPuncher": {
            "type": Number,
            "attr": "power-puncher",
            "mutable": true
        },
        "risingKick": {
            "type": Number,
            "attr": "rising-kick",
            "mutable": true
        },
        "skills": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "skillchanged",
            "method": "onSkillChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ms-striker:**/"; }
}
