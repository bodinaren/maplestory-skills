import { h } from "@stencil/core";
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
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, KnightSkills, skill);
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
    static get originalStyleUrls() { return {
        "$": ["knight.css"]
    }; }
    static get styleUrls() { return {
        "$": ["knight.css"]
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
        "bulwark": {
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
            "attribute": "bulwark",
            "reflect": false,
            "defaultValue": "KnightSkills.Bulwark.minLevel"
        },
        "crossCut": {
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
            "attribute": "cross-cut",
            "reflect": false,
            "defaultValue": "KnightSkills.CrossCut.minLevel"
        },
        "defenderOfTheFaith": {
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
            "attribute": "defender-of-the-faith",
            "reflect": false,
            "defaultValue": "KnightSkills.DefenderOfTheFaith.minLevel"
        },
        "divineStrike": {
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
            "attribute": "divine-strike",
            "reflect": false,
            "defaultValue": "KnightSkills.DivineStrike.minLevel"
        },
        "drillThrust": {
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
            "attribute": "drill-thrust",
            "reflect": false,
            "defaultValue": "KnightSkills.DrillThrust.minLevel"
        },
        "ironDefense": {
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
            "attribute": "iron-defense",
            "reflect": false,
            "defaultValue": "KnightSkills.IronDefense.minLevel"
        },
        "ironShield": {
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
            "attribute": "iron-shield",
            "reflect": false,
            "defaultValue": "KnightSkills.IronShield.minLevel"
        },
        "longswordMastery": {
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
            "attribute": "longsword-mastery",
            "reflect": false,
            "defaultValue": "KnightSkills.LongswordMastery.minLevel"
        },
        "shieldBooster": {
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
            "attribute": "shield-booster",
            "reflect": false,
            "defaultValue": "KnightSkills.ShieldBooster.minLevel"
        },
        "shieldCharge": {
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
            "attribute": "shield-charge",
            "reflect": false,
            "defaultValue": "KnightSkills.ShieldCharge.minLevel"
        },
        "shieldMastery": {
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
            "attribute": "shield-mastery",
            "reflect": false,
            "defaultValue": "KnightSkills.ShieldMastery.minLevel"
        },
        "shieldToss": {
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
            "attribute": "shield-toss",
            "reflect": false,
            "defaultValue": "KnightSkills.ShieldToss.minLevel"
        },
        "shieldWall": {
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
            "attribute": "shield-wall",
            "reflect": false,
            "defaultValue": "KnightSkills.ShieldWall.minLevel"
        },
        "stingingFlurry": {
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
            "attribute": "stinging-flurry",
            "reflect": false,
            "defaultValue": "KnightSkills.StingingFlurry.minLevel"
        },
        "tornadoSlash": {
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
            "attribute": "tornado-slash",
            "reflect": false,
            "defaultValue": "KnightSkills.TornadoSlash.minLevel"
        },
        "typhoonSlash": {
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
            "attribute": "typhoon-slash",
            "reflect": false,
            "defaultValue": "KnightSkills.TyphoonSlash.minLevel"
        },
        "warhorn": {
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
            "attribute": "warhorn",
            "reflect": false,
            "defaultValue": "KnightSkills.Warhorn.minLevel"
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
    static get watchers() { return [{
            "propName": "extras",
            "methodName": "emitChangeEvent"
        }]; }
}
