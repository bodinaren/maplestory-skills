import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as ThiefSkills from "../../../global/values/thief";
export class ThiefComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.bladeDance = ThiefSkills.BladeDance.minLevel;
        this.cunningTactics = ThiefSkills.CunningTactics.minLevel;
        this.deftCombatant = ThiefSkills.DeftCombatant.minLevel;
        this.doubleSlash = ThiefSkills.DoubleSlash.minLevel;
        this.haste = ThiefSkills.Haste.minLevel;
        this.mesoguardPlus = ThiefSkills.MesoguardPlus.minLevel;
        this.mindBreaker = ThiefSkills.MindBreaker.minLevel;
        this.mindStealer = ThiefSkills.MindStealer.minLevel;
        this.poisonEdge = ThiefSkills.PoisonEdge.minLevel;
        this.poisonVial = ThiefSkills.PoisonVial.minLevel;
        this.quickStep = ThiefSkills.QuickStep.minLevel;
        this.retaliation = ThiefSkills.Retaliation.minLevel;
        this.ruthlessGuile = ThiefSkills.RuthlessGuile.minLevel;
        this.somersaultKick = ThiefSkills.SomersaultKick.minLevel;
        this.spiritThief = ThiefSkills.SpiritThief.minLevel;
        this.surpriseAttack = ThiefSkills.SurpriseAttack.minLevel;
        this.viciousCuts = ThiefSkills.ViciousCuts.minLevel;
    }
    componentWillLoad() {
        processSkills(this, ThiefSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, ThiefSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, ThiefSkills, skill);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ThiefSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "thief" }, renderLevelControls(this, ThiefSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-thief"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["thief.css"]
    }; }
    static get styleUrls() { return {
        "$": ["thief.css"]
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
        "bladeDance": {
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
            "attribute": "blade-dance",
            "reflect": false,
            "defaultValue": "ThiefSkills.BladeDance.minLevel"
        },
        "cunningTactics": {
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
            "attribute": "cunning-tactics",
            "reflect": false,
            "defaultValue": "ThiefSkills.CunningTactics.minLevel"
        },
        "deftCombatant": {
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
            "attribute": "deft-combatant",
            "reflect": false,
            "defaultValue": "ThiefSkills.DeftCombatant.minLevel"
        },
        "doubleSlash": {
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
            "attribute": "double-slash",
            "reflect": false,
            "defaultValue": "ThiefSkills.DoubleSlash.minLevel"
        },
        "haste": {
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
            "attribute": "haste",
            "reflect": false,
            "defaultValue": "ThiefSkills.Haste.minLevel"
        },
        "mesoguardPlus": {
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
            "attribute": "mesoguard-plus",
            "reflect": false,
            "defaultValue": "ThiefSkills.MesoguardPlus.minLevel"
        },
        "mindBreaker": {
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
            "attribute": "mind-breaker",
            "reflect": false,
            "defaultValue": "ThiefSkills.MindBreaker.minLevel"
        },
        "mindStealer": {
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
            "attribute": "mind-stealer",
            "reflect": false,
            "defaultValue": "ThiefSkills.MindStealer.minLevel"
        },
        "poisonEdge": {
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
            "attribute": "poison-edge",
            "reflect": false,
            "defaultValue": "ThiefSkills.PoisonEdge.minLevel"
        },
        "poisonVial": {
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
            "attribute": "poison-vial",
            "reflect": false,
            "defaultValue": "ThiefSkills.PoisonVial.minLevel"
        },
        "quickStep": {
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
            "attribute": "quick-step",
            "reflect": false,
            "defaultValue": "ThiefSkills.QuickStep.minLevel"
        },
        "retaliation": {
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
            "attribute": "retaliation",
            "reflect": false,
            "defaultValue": "ThiefSkills.Retaliation.minLevel"
        },
        "ruthlessGuile": {
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
            "attribute": "ruthless-guile",
            "reflect": false,
            "defaultValue": "ThiefSkills.RuthlessGuile.minLevel"
        },
        "somersaultKick": {
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
            "attribute": "somersault-kick",
            "reflect": false,
            "defaultValue": "ThiefSkills.SomersaultKick.minLevel"
        },
        "spiritThief": {
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
            "attribute": "spirit-thief",
            "reflect": false,
            "defaultValue": "ThiefSkills.SpiritThief.minLevel"
        },
        "surpriseAttack": {
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
            "attribute": "surprise-attack",
            "reflect": false,
            "defaultValue": "ThiefSkills.SurpriseAttack.minLevel"
        },
        "viciousCuts": {
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
            "attribute": "vicious-cuts",
            "reflect": false,
            "defaultValue": "ThiefSkills.ViciousCuts.minLevel"
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
