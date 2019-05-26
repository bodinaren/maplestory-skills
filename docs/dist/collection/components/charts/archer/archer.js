import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { ArcherSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/archer";
export class ArcherComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
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
        this.improvedGliding = ArcherSkills.ImprovedGliding.minLevel;
        this.flameArrow = ArcherSkills.FlameArrow.minLevel;
        this.multiDriveShot = ArcherSkills.MultiDriveShot.minLevel;
        this.rangersFocus = ArcherSkills.RangersFocus.minLevel;
        this.hastersTeachings = ArcherSkills.HastersTeachings.minLevel;
        this.piercingArrow = ArcherSkills.PiercingArrow.minLevel;
        this.spiralArrow = ArcherSkills.SpiralArrow.minLevel;
        this.archersSecrets = ArcherSkills.ArchersSecrets.minLevel;
        this.greaterSharpEyes = ArcherSkills.GreaterSharpEyes.minLevel;
    }
    componentWillLoad() {
        processSkills(this, ArcherSkills, this.ignoreMax);
    }
    async getData() {
        return toSkillChangeEventObject(this, ArcherSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, ArcherSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    ignoreMaxChanged() {
        processSkills(this, ArcherSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ArcherSkills));
    }
    render() {
        return [
            h("ms-chart", { msClass: "archer", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
                renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
                renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening))
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
        },
        "improvedGliding": {
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
            "attribute": "improved-gliding",
            "reflect": false,
            "defaultValue": "ArcherSkills.ImprovedGliding.minLevel"
        },
        "flameArrow": {
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
            "attribute": "flame-arrow",
            "reflect": false,
            "defaultValue": "ArcherSkills.FlameArrow.minLevel"
        },
        "multiDriveShot": {
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
            "attribute": "multi-drive-shot",
            "reflect": false,
            "defaultValue": "ArcherSkills.MultiDriveShot.minLevel"
        },
        "rangersFocus": {
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
            "attribute": "rangers-focus",
            "reflect": false,
            "defaultValue": "ArcherSkills.RangersFocus.minLevel"
        },
        "hastersTeachings": {
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
            "attribute": "hasters-teachings",
            "reflect": false,
            "defaultValue": "ArcherSkills.HastersTeachings.minLevel"
        },
        "piercingArrow": {
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
            "attribute": "piercing-arrow",
            "reflect": false,
            "defaultValue": "ArcherSkills.PiercingArrow.minLevel"
        },
        "spiralArrow": {
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
            "attribute": "spiral-arrow",
            "reflect": false,
            "defaultValue": "ArcherSkills.SpiralArrow.minLevel"
        },
        "archersSecrets": {
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
            "attribute": "archers-secrets",
            "reflect": false,
            "defaultValue": "ArcherSkills.ArchersSecrets.minLevel"
        },
        "greaterSharpEyes": {
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
            "attribute": "greater-sharp-eyes",
            "reflect": false,
            "defaultValue": "ArcherSkills.GreaterSharpEyes.minLevel"
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
