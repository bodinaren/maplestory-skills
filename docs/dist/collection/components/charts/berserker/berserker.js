import { h } from "@stencil/core";
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
    static get originalStyleUrls() { return {
        "$": ["berserker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["berserker.css"]
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
        "adrenalineRush": {
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
            "attribute": "adrenaline-rush",
            "reflect": false,
            "defaultValue": "BerserkerSkills.AdrenalineRush.minLevel"
        },
        "bloodPrice": {
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
            "attribute": "blood-price",
            "reflect": false,
            "defaultValue": "BerserkerSkills.BloodPrice.minLevel"
        },
        "bloodlust": {
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
            "attribute": "bloodlust",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Bloodlust.minLevel"
        },
        "darkAura": {
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
            "attribute": "dark-aura",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DarkAura.minLevel"
        },
        "darkBreaker": {
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
            "attribute": "dark-breaker",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DarkBreaker.minLevel"
        },
        "darkMight": {
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
            "attribute": "dark-might",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DarkMight.minLevel"
        },
        "deathSpin": {
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
            "attribute": "death-spin",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DeathSpin.minLevel"
        },
        "deepWounds": {
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
            "attribute": "deep-wounds",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DeepWounds.minLevel"
        },
        "earthquake": {
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
            "attribute": "earthquake",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Earthquake.minLevel"
        },
        "greatswordMastery": {
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
            "attribute": "greatsword-mastery",
            "reflect": false,
            "defaultValue": "BerserkerSkills.GreatswordMastery.minLevel"
        },
        "groundBreaker": {
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
            "attribute": "ground-breaker",
            "reflect": false,
            "defaultValue": "BerserkerSkills.GroundBreaker.minLevel"
        },
        "inhumanEndurance": {
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
            "attribute": "inhuman-endurance",
            "reflect": false,
            "defaultValue": "BerserkerSkills.InhumanEndurance.minLevel"
        },
        "intimidation": {
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
            "attribute": "intimidation",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Intimidation.minLevel"
        },
        "ragingSlash": {
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
            "attribute": "raging-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.RagingSlash.minLevel"
        },
        "voidSlash": {
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
            "attribute": "void-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.VoidSlash.minLevel"
        },
        "warriorsInstinct": {
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
            "attribute": "warriors-instinct",
            "reflect": false,
            "defaultValue": "BerserkerSkills.WarriorsInstinct.minLevel"
        },
        "xSlash": {
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
            "attribute": "x-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.XSlash.minLevel"
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
