import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as ArcherSkills from "../../../global/values/archer";
export class ArcherComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.agileArcher = ArcherSkills.AgileArcher.minLevel;
        this.arrowBarrage = ArcherSkills.ArrowBarrage.minLevel;
        this.arrowStorm = ArcherSkills.ArrowStorm.minLevel;
        this.arrowStream = ArcherSkills.ArrowStream.minLevel;
        this.bowSwing = ArcherSkills.BowSwing.minLevel;
        this.bronzeEagle = ArcherSkills.BronzeEagle.minLevel;
        this.conditioning = ArcherSkills.Conditioning.minLevel;
        this.eagleClaw = ArcherSkills.EagleClaw.minLevel;
        this.eagleGlide = ArcherSkills.EagleGlide.minLevel;
        this.eaglesMajesty = ArcherSkills.EaglesMajesty.minLevel;
        this.evasiveSalvo = ArcherSkills.EvasiveSalvo.minLevel;
        this.iceArrow = ArcherSkills.IceArrow.minLevel;
        this.precisionShooter = ArcherSkills.PrecisionShooter.minLevel;
        this.rapidShot = ArcherSkills.RapidShot.minLevel;
        this.screwdriverShot = ArcherSkills.ScrewdriverShot.minLevel;
        this.sharpEyes = ArcherSkills.SharpEyes.minLevel;
        this.snipe = ArcherSkills.Snipe.minLevel;
    }
    componentWillLoad() {
        processSkills(this, ArcherSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, ArcherSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, ArcherSkills, skill);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ArcherSkills));
    }
    render() {
        return [
            h("ms-chart", { msClass: "archer" }, renderLevelControls(this, ArcherSkills, this.editable, this.extras))
        ];
    }
    static get is() { return "ms-archer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["archer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["archer.css"]
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
        "agileArcher": {
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
            "attribute": "agile-archer",
            "reflect": false,
            "defaultValue": "ArcherSkills.AgileArcher.minLevel"
        },
        "arrowBarrage": {
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
            "attribute": "arrow-barrage",
            "reflect": false,
            "defaultValue": "ArcherSkills.ArrowBarrage.minLevel"
        },
        "arrowStorm": {
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
            "attribute": "arrow-storm",
            "reflect": false,
            "defaultValue": "ArcherSkills.ArrowStorm.minLevel"
        },
        "arrowStream": {
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
            "attribute": "arrow-stream",
            "reflect": false,
            "defaultValue": "ArcherSkills.ArrowStream.minLevel"
        },
        "bowSwing": {
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
            "attribute": "bow-swing",
            "reflect": false,
            "defaultValue": "ArcherSkills.BowSwing.minLevel"
        },
        "bronzeEagle": {
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
            "attribute": "bronze-eagle",
            "reflect": false,
            "defaultValue": "ArcherSkills.BronzeEagle.minLevel"
        },
        "conditioning": {
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
            "attribute": "conditioning",
            "reflect": false,
            "defaultValue": "ArcherSkills.Conditioning.minLevel"
        },
        "eagleClaw": {
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
            "attribute": "eagle-claw",
            "reflect": false,
            "defaultValue": "ArcherSkills.EagleClaw.minLevel"
        },
        "eagleGlide": {
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
            "attribute": "eagle-glide",
            "reflect": false,
            "defaultValue": "ArcherSkills.EagleGlide.minLevel"
        },
        "eaglesMajesty": {
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
            "attribute": "eagles-majesty",
            "reflect": false,
            "defaultValue": "ArcherSkills.EaglesMajesty.minLevel"
        },
        "evasiveSalvo": {
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
            "attribute": "evasive-salvo",
            "reflect": false,
            "defaultValue": "ArcherSkills.EvasiveSalvo.minLevel"
        },
        "iceArrow": {
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
            "attribute": "ice-arrow",
            "reflect": false,
            "defaultValue": "ArcherSkills.IceArrow.minLevel"
        },
        "precisionShooter": {
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
            "attribute": "precision-shooter",
            "reflect": false,
            "defaultValue": "ArcherSkills.PrecisionShooter.minLevel"
        },
        "rapidShot": {
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
            "attribute": "rapid-shot",
            "reflect": false,
            "defaultValue": "ArcherSkills.RapidShot.minLevel"
        },
        "screwdriverShot": {
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
            "attribute": "screwdriver-shot",
            "reflect": false,
            "defaultValue": "ArcherSkills.ScrewdriverShot.minLevel"
        },
        "sharpEyes": {
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
            "attribute": "sharp-eyes",
            "reflect": false,
            "defaultValue": "ArcherSkills.SharpEyes.minLevel"
        },
        "snipe": {
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
            "attribute": "snipe",
            "reflect": false,
            "defaultValue": "ArcherSkills.Snipe.minLevel"
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
