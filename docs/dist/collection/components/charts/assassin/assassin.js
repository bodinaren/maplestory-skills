import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as AssassinSkills from "../../../global/values/assassin";
export class AssassinComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.darkCloak = AssassinSkills.DarkCloak.minLevel;
        this.dash = AssassinSkills.Dash.minLevel;
        this.deathSentence = AssassinSkills.DeathSentence.minLevel;
        this.fatalStrikes = AssassinSkills.FatalStrikes.minLevel;
        this.fragmentedStar = AssassinSkills.FragmentedStar.minLevel;
        this.luckyStars = AssassinSkills.LuckyStars.minLevel;
        this.markOfDeath = AssassinSkills.MarkOfDeath.minLevel;
        this.mirrorImageDarkBlade = AssassinSkills.MirrorImageDarkBlade.minLevel;
        this.shadowArts = AssassinSkills.ShadowArts.minLevel;
        this.shadowBurst = AssassinSkills.ShadowBurst.minLevel;
        this.shadowChaser = AssassinSkills.ShadowChaser.minLevel;
        this.shadowCutter = AssassinSkills.ShadowCutter.minLevel;
        this.shadowWeb = AssassinSkills.ShadowWeb.minLevel;
        this.soulGrind = AssassinSkills.SoulGrind.minLevel;
        this.starChaser = AssassinSkills.StarChaser.minLevel;
        this.starFlurry = AssassinSkills.StarFlurry.minLevel;
        this.thrownWeaponMastery = AssassinSkills.ThrownWeaponMastery.minLevel;
    }
    componentWillLoad() {
        processSkills(this, AssassinSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, AssassinSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, AssassinSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, AssassinSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "assassin" }, renderLevelControls(this, AssassinSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-assassin"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "darkCloak": {
            "type": Number,
            "attr": "dark-cloak",
            "mutable": true
        },
        "dash": {
            "type": Number,
            "attr": "dash",
            "mutable": true
        },
        "deathSentence": {
            "type": Number,
            "attr": "death-sentence",
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
        "fatalStrikes": {
            "type": Number,
            "attr": "fatal-strikes",
            "mutable": true
        },
        "fragmentedStar": {
            "type": Number,
            "attr": "fragmented-star",
            "mutable": true
        },
        "getData": {
            "method": true
        },
        "luckyStars": {
            "type": Number,
            "attr": "lucky-stars",
            "mutable": true
        },
        "markOfDeath": {
            "type": Number,
            "attr": "mark-of-death",
            "mutable": true
        },
        "mirrorImageDarkBlade": {
            "type": Number,
            "attr": "mirror-image-dark-blade",
            "mutable": true
        },
        "shadowArts": {
            "type": Number,
            "attr": "shadow-arts",
            "mutable": true
        },
        "shadowBurst": {
            "type": Number,
            "attr": "shadow-burst",
            "mutable": true
        },
        "shadowChaser": {
            "type": Number,
            "attr": "shadow-chaser",
            "mutable": true
        },
        "shadowCutter": {
            "type": Number,
            "attr": "shadow-cutter",
            "mutable": true
        },
        "shadowWeb": {
            "type": Number,
            "attr": "shadow-web",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "soulGrind": {
            "type": Number,
            "attr": "soul-grind",
            "mutable": true
        },
        "starChaser": {
            "type": Number,
            "attr": "star-chaser",
            "mutable": true
        },
        "starFlurry": {
            "type": Number,
            "attr": "star-flurry",
            "mutable": true
        },
        "thrownWeaponMastery": {
            "type": Number,
            "attr": "thrown-weapon-mastery",
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
    static get style() { return "/**style-placeholder:ms-assassin:**/"; }
}
