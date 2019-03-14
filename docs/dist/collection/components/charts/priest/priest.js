import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as PriestSkills from "../../../global/values/priest";
export class PriestComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.heavenlyWings = PriestSkills.HeavenlyWings.minLevel;
        this.steadfastFaith = PriestSkills.SteadfastFaith.minLevel;
        this.celestialLight = PriestSkills.CelestialLight.minLevel;
        this.holyBlast = PriestSkills.HolyBlast.minLevel;
        this.healingPrayer = PriestSkills.HealingPrayer.minLevel;
        this.scepterMastery = PriestSkills.ScepterMastery.minLevel;
        this.celestialGuardian = PriestSkills.CelestialGuardian.minLevel;
        this.shieldOfTheArchon = PriestSkills.ShieldOfTheArchon.minLevel;
        this.scourgingWave = PriestSkills.ScourgingWave.minLevel;
        this.celestialBlessings = PriestSkills.CelestialBlessings.minLevel;
        this.holyRelic = PriestSkills.HolyRelic.minLevel;
        this.sanctuary = PriestSkills.Sanctuary.minLevel;
        this.holySymbol = PriestSkills.HolySymbol.minLevel;
        this.healingMastery = PriestSkills.HealingMastery.minLevel;
        this.smitingAura = PriestSkills.SmitingAura.minLevel;
        this.disciple = PriestSkills.Disciple.minLevel;
        this.angelicRay = PriestSkills.AngelicRay.minLevel;
    }
    componentWillLoad() {
        processSkills(this, PriestSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, PriestSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, PriestSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, PriestSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "priest" }, renderLevelControls(this, PriestSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-priest"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "angelicRay": {
            "type": Number,
            "attr": "angelic-ray",
            "mutable": true
        },
        "celestialBlessings": {
            "type": Number,
            "attr": "celestial-blessings",
            "mutable": true
        },
        "celestialGuardian": {
            "type": Number,
            "attr": "celestial-guardian",
            "mutable": true
        },
        "celestialLight": {
            "type": Number,
            "attr": "celestial-light",
            "mutable": true
        },
        "disciple": {
            "type": Number,
            "attr": "disciple",
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
        "getData": {
            "method": true
        },
        "healingMastery": {
            "type": Number,
            "attr": "healing-mastery",
            "mutable": true
        },
        "healingPrayer": {
            "type": Number,
            "attr": "healing-prayer",
            "mutable": true
        },
        "heavenlyWings": {
            "type": Number,
            "attr": "heavenly-wings",
            "mutable": true
        },
        "holyBlast": {
            "type": Number,
            "attr": "holy-blast",
            "mutable": true
        },
        "holyRelic": {
            "type": Number,
            "attr": "holy-relic",
            "mutable": true
        },
        "holySymbol": {
            "type": Number,
            "attr": "holy-symbol",
            "mutable": true
        },
        "sanctuary": {
            "type": Number,
            "attr": "sanctuary",
            "mutable": true
        },
        "scepterMastery": {
            "type": Number,
            "attr": "scepter-mastery",
            "mutable": true
        },
        "scourgingWave": {
            "type": Number,
            "attr": "scourging-wave",
            "mutable": true
        },
        "shieldOfTheArchon": {
            "type": Number,
            "attr": "shield-of-the-archon",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "smitingAura": {
            "type": Number,
            "attr": "smiting-aura",
            "mutable": true
        },
        "steadfastFaith": {
            "type": Number,
            "attr": "steadfast-faith",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "skillchanged",
            "method": "onSkillChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ms-priest:**/"; }
}
