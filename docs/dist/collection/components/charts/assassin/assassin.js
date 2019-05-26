import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { AssassinSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/assassin";
export class AssassinComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
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
        this.darkPunisher = AssassinSkills.DarkPunisher.minLevel;
        this.redoubledPain = AssassinSkills.RedoubledPain.minLevel;
        this.bindingPunishment = AssassinSkills.BindingPunishment.minLevel;
        this.artOfTheShuriken = AssassinSkills.ArtOfTheShuriken.minLevel;
        this.allInOne = AssassinSkills.AllInOne.minLevel;
        this.darkMire = AssassinSkills.DarkMire.minLevel;
        this.shadowStance = AssassinSkills.ShadowStance.minLevel;
        this.artOfTheShadows = AssassinSkills.ArtOfTheShadows.minLevel;
        this.assassinsCircle = AssassinSkills.AssassinsCircle.minLevel;
    }
    componentWillLoad() {
        processSkills(this, AssassinSkills, this.ignoreMax);
    }
    async getData() {
        return toSkillChangeEventObject(this, AssassinSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, AssassinSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    ignoreMaxChanged() {
        processSkills(this, AssassinSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, AssassinSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "assassin", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    static get is() { return "ms-assassin"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["assassin.css"]
    }; }
    static get styleUrls() { return {
        "$": ["assassin.css"]
    }; }
    static get properties() { return {
        "editable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "editable",
            "reflect": true,
            "defaultValue": "false"
        },
        "rank": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rank",
            "reflect": true,
            "defaultValue": "Rank.Basic"
        },
        "extras": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "extras",
            "reflect": false,
            "defaultValue": "false"
        },
        "ignoreMax": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ignore-max",
            "reflect": false,
            "defaultValue": "false"
        },
        "darkCloak": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dark-cloak",
            "reflect": false,
            "defaultValue": "AssassinSkills.DarkCloak.minLevel"
        },
        "dash": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dash",
            "reflect": false,
            "defaultValue": "AssassinSkills.Dash.minLevel"
        },
        "deathSentence": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "death-sentence",
            "reflect": false,
            "defaultValue": "AssassinSkills.DeathSentence.minLevel"
        },
        "fatalStrikes": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fatal-strikes",
            "reflect": false,
            "defaultValue": "AssassinSkills.FatalStrikes.minLevel"
        },
        "fragmentedStar": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "fragmented-star",
            "reflect": false,
            "defaultValue": "AssassinSkills.FragmentedStar.minLevel"
        },
        "luckyStars": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "lucky-stars",
            "reflect": false,
            "defaultValue": "AssassinSkills.LuckyStars.minLevel"
        },
        "markOfDeath": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "mark-of-death",
            "reflect": false,
            "defaultValue": "AssassinSkills.MarkOfDeath.minLevel"
        },
        "mirrorImageDarkBlade": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "mirror-image-dark-blade",
            "reflect": false,
            "defaultValue": "AssassinSkills.MirrorImageDarkBlade.minLevel"
        },
        "shadowArts": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shadow-arts",
            "reflect": false,
            "defaultValue": "AssassinSkills.ShadowArts.minLevel"
        },
        "shadowBurst": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shadow-burst",
            "reflect": false,
            "defaultValue": "AssassinSkills.ShadowBurst.minLevel"
        },
        "shadowChaser": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shadow-chaser",
            "reflect": false,
            "defaultValue": "AssassinSkills.ShadowChaser.minLevel"
        },
        "shadowCutter": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shadow-cutter",
            "reflect": false,
            "defaultValue": "AssassinSkills.ShadowCutter.minLevel"
        },
        "shadowWeb": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shadow-web",
            "reflect": false,
            "defaultValue": "AssassinSkills.ShadowWeb.minLevel"
        },
        "soulGrind": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "soul-grind",
            "reflect": false,
            "defaultValue": "AssassinSkills.SoulGrind.minLevel"
        },
        "starChaser": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "star-chaser",
            "reflect": false,
            "defaultValue": "AssassinSkills.StarChaser.minLevel"
        },
        "starFlurry": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "star-flurry",
            "reflect": false,
            "defaultValue": "AssassinSkills.StarFlurry.minLevel"
        },
        "thrownWeaponMastery": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "thrown-weapon-mastery",
            "reflect": false,
            "defaultValue": "AssassinSkills.ThrownWeaponMastery.minLevel"
        },
        "darkPunisher": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dark-punisher",
            "reflect": false,
            "defaultValue": "AssassinSkills.DarkPunisher.minLevel"
        },
        "redoubledPain": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "redoubled-pain",
            "reflect": false,
            "defaultValue": "AssassinSkills.RedoubledPain.minLevel"
        },
        "bindingPunishment": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "binding-punishment",
            "reflect": false,
            "defaultValue": "AssassinSkills.BindingPunishment.minLevel"
        },
        "artOfTheShuriken": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "art-of-the-shuriken",
            "reflect": false,
            "defaultValue": "AssassinSkills.ArtOfTheShuriken.minLevel"
        },
        "allInOne": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "all-in-one",
            "reflect": false,
            "defaultValue": "AssassinSkills.AllInOne.minLevel"
        },
        "darkMire": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dark-mire",
            "reflect": false,
            "defaultValue": "AssassinSkills.DarkMire.minLevel"
        },
        "shadowStance": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "shadow-stance",
            "reflect": false,
            "defaultValue": "AssassinSkills.ShadowStance.minLevel"
        },
        "artOfTheShadows": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "art-of-the-shadows",
            "reflect": false,
            "defaultValue": "AssassinSkills.ArtOfTheShadows.minLevel"
        },
        "assassinsCircle": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "assassins-circle",
            "reflect": false,
            "defaultValue": "AssassinSkills.AssassinsCircle.minLevel"
        }
    }; }
    static get states() { return {
        "skills": {}
    }; }
    static get events() { return [{
            "method": "onSkillChanged",
            "name": "skillchanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getData": {
            "complexType": {
                "signature": "() => Promise<import(\"C:/Programming/_github/maplestory-skills/src/components/charts/skill-change-event\").ISkillChangeEvent>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "ISkillChangeEvent": {
                        "location": "global"
                    }
                },
                "return": "Promise<ISkillChangeEvent>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "ignoreMax",
            "methodName": "ignoreMaxChanged"
        }, {
            "propName": "extras",
            "methodName": "emitChangeEvent"
        }, {
            "propName": "rank",
            "methodName": "emitChangeEvent"
        }]; }
}
