import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as BerserkerSkills from "../../../global/values/berserker";
export class BerserkerComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.adrenalineRush = BerserkerSkills.AdrenalineRush.minLevel;
        this.bloodPrice = BerserkerSkills.BloodPrice.minLevel;
        this.bloodlust = BerserkerSkills.Bloodlust.minLevel;
        this.darkAura = BerserkerSkills.DarkAura.minLevel;
        this.darkBreaker = BerserkerSkills.DarkBreaker.minLevel;
        this.darkMight = BerserkerSkills.DarkMight.minLevel;
        this.deathSpin = BerserkerSkills.DeathSpin.minLevel;
        this.deepWounds = BerserkerSkills.DeepWounds.minLevel;
        this.earthquake = BerserkerSkills.Earthquake.minLevel;
        this.greatswordMastery = BerserkerSkills.GreatswordMastery.minLevel;
        this.groundBreaker = BerserkerSkills.GroundBreaker.minLevel;
        this.inhumanEndurance = BerserkerSkills.InhumanEndurance.minLevel;
        this.intimidation = BerserkerSkills.Intimidation.minLevel;
        this.ragingSlash = BerserkerSkills.RagingSlash.minLevel;
        this.voidSlash = BerserkerSkills.VoidSlash.minLevel;
        this.warriorsInstinct = BerserkerSkills.WarriorsInstinct.minLevel;
        this.xSlash = BerserkerSkills.XSlash.minLevel;
    }
    componentWillLoad() {
        processSkills(this, BerserkerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, BerserkerSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, BerserkerSkills, skill);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, BerserkerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "berserker" }, renderLevelControls(this, BerserkerSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-berserker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "adrenalineRush": {
            "type": Number,
            "attr": "adrenaline-rush",
            "mutable": true
        },
        "bloodlust": {
            "type": Number,
            "attr": "bloodlust",
            "mutable": true
        },
        "bloodPrice": {
            "type": Number,
            "attr": "blood-price",
            "mutable": true
        },
        "darkAura": {
            "type": Number,
            "attr": "dark-aura",
            "mutable": true
        },
        "darkBreaker": {
            "type": Number,
            "attr": "dark-breaker",
            "mutable": true
        },
        "darkMight": {
            "type": Number,
            "attr": "dark-might",
            "mutable": true
        },
        "deathSpin": {
            "type": Number,
            "attr": "death-spin",
            "mutable": true
        },
        "deepWounds": {
            "type": Number,
            "attr": "deep-wounds",
            "mutable": true
        },
        "earthquake": {
            "type": Number,
            "attr": "earthquake",
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
        "greatswordMastery": {
            "type": Number,
            "attr": "greatsword-mastery",
            "mutable": true
        },
        "groundBreaker": {
            "type": Number,
            "attr": "ground-breaker",
            "mutable": true
        },
        "inhumanEndurance": {
            "type": Number,
            "attr": "inhuman-endurance",
            "mutable": true
        },
        "intimidation": {
            "type": Number,
            "attr": "intimidation",
            "mutable": true
        },
        "ragingSlash": {
            "type": Number,
            "attr": "raging-slash",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "voidSlash": {
            "type": Number,
            "attr": "void-slash",
            "mutable": true
        },
        "warriorsInstinct": {
            "type": Number,
            "attr": "warriors-instinct",
            "mutable": true
        },
        "xSlash": {
            "type": Number,
            "attr": "x-slash",
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
    static get style() { return "/**style-placeholder:ms-berserker:**/"; }
}
