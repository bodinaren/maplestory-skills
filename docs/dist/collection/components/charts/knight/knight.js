import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as KnightSkills from "../../../global/values/knight";
export class KnightComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.bulwark = KnightSkills.Bulwark.minLevel;
        this.crossCut = KnightSkills.CrossCut.minLevel;
        this.defenderOfTheFaith = KnightSkills.DefenderOfTheFaith.minLevel;
        this.divineStrike = KnightSkills.DivineStrike.minLevel;
        this.drillThrust = KnightSkills.DrillThrust.minLevel;
        this.ironDefense = KnightSkills.IronDefense.minLevel;
        this.ironShield = KnightSkills.IronShield.minLevel;
        this.longswordMastery = KnightSkills.LongswordMastery.minLevel;
        this.shieldBooster = KnightSkills.ShieldBooster.minLevel;
        this.shieldCharge = KnightSkills.ShieldCharge.minLevel;
        this.shieldMastery = KnightSkills.ShieldMastery.minLevel;
        this.shieldToss = KnightSkills.ShieldToss.minLevel;
        this.shieldWall = KnightSkills.ShieldWall.minLevel;
        this.stingingFlurry = KnightSkills.StingingFlurry.minLevel;
        this.tornadoSlash = KnightSkills.TornadoSlash.minLevel;
        this.typhoonSlash = KnightSkills.TyphoonSlash.minLevel;
        this.warhorn = KnightSkills.Warhorn.minLevel;
    }
    componentWillLoad() {
        processSkills(this, KnightSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, KnightSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, KnightSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, KnightSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "knight" }, renderLevelControls(this, KnightSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-knight"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bulwark": {
            "type": Number,
            "attr": "bulwark",
            "mutable": true
        },
        "crossCut": {
            "type": Number,
            "attr": "cross-cut",
            "mutable": true
        },
        "defenderOfTheFaith": {
            "type": Number,
            "attr": "defender-of-the-faith",
            "mutable": true
        },
        "divineStrike": {
            "type": Number,
            "attr": "divine-strike",
            "mutable": true
        },
        "drillThrust": {
            "type": Number,
            "attr": "drill-thrust",
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
        "ironDefense": {
            "type": Number,
            "attr": "iron-defense",
            "mutable": true
        },
        "ironShield": {
            "type": Number,
            "attr": "iron-shield",
            "mutable": true
        },
        "longswordMastery": {
            "type": Number,
            "attr": "longsword-mastery",
            "mutable": true
        },
        "shieldBooster": {
            "type": Number,
            "attr": "shield-booster",
            "mutable": true
        },
        "shieldCharge": {
            "type": Number,
            "attr": "shield-charge",
            "mutable": true
        },
        "shieldMastery": {
            "type": Number,
            "attr": "shield-mastery",
            "mutable": true
        },
        "shieldToss": {
            "type": Number,
            "attr": "shield-toss",
            "mutable": true
        },
        "shieldWall": {
            "type": Number,
            "attr": "shield-wall",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "stingingFlurry": {
            "type": Number,
            "attr": "stinging-flurry",
            "mutable": true
        },
        "tornadoSlash": {
            "type": Number,
            "attr": "tornado-slash",
            "mutable": true
        },
        "typhoonSlash": {
            "type": Number,
            "attr": "typhoon-slash",
            "mutable": true
        },
        "warhorn": {
            "type": Number,
            "attr": "warhorn",
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
    static get style() { return "/**style-placeholder:ms-knight:**/"; }
}
