import { h } from "@stencil/core";
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
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, AssassinSkills, skill);
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
                "signature": "() => Promise<import(\"C:/Users/Marcus/Dropbox/Programming/_github/maplestory-skills/src/components/charts/skill-change-event\").ISkillChangeEvent>",
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
    static get watchers() { return [{
            "propName": "extras",
            "methodName": "emitChangeEvent"
        }]; }
}
