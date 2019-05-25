import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as StrikerSkills from "../../../global/values/striker";
export class StrikerComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.beatdown = StrikerSkills.Beatdown.minLevel;
        this.dragonKick = StrikerSkills.DragonKick.minLevel;
        this.fightingSpirit = StrikerSkills.FightingSpirit.minLevel;
        this.fistsOfFury = StrikerSkills.FistsOfFury.minLevel;
        this.giganticBurst = StrikerSkills.GiganticBurst.minLevel;
        this.guardDash = StrikerSkills.GuardDash.minLevel;
        this.guillotine = StrikerSkills.Guillotine.minLevel;
        this.hurricaneCutter = StrikerSkills.HurricaneCutter.minLevel;
        this.kickTechnician = StrikerSkills.KickTechnician.minLevel;
        this.knuckleMissile = StrikerSkills.KnuckleMissile.minLevel;
        this.magnumBlow = StrikerSkills.MagnumBlow.minLevel;
        this.maharPunch = StrikerSkills.MaharPunch.minLevel;
        this.overcome = StrikerSkills.Overcome.minLevel;
        this.paceControl = StrikerSkills.PaceControl.minLevel;
        this.patternBreak = StrikerSkills.PatternBreak.minLevel;
        this.powerPuncher = StrikerSkills.PowerPuncher.minLevel;
        this.risingKick = StrikerSkills.RisingKick.minLevel;
    }
    componentWillLoad() {
        processSkills(this, StrikerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, StrikerSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, StrikerSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, StrikerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "striker" }, renderLevelControls(this, StrikerSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-striker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["striker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["striker.css"]
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
        "beatdown": {
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
            "attribute": "beatdown",
            "reflect": false,
            "defaultValue": "StrikerSkills.Beatdown.minLevel"
        },
        "dragonKick": {
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
            "attribute": "dragon-kick",
            "reflect": false,
            "defaultValue": "StrikerSkills.DragonKick.minLevel"
        },
        "fightingSpirit": {
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
            "attribute": "fighting-spirit",
            "reflect": false,
            "defaultValue": "StrikerSkills.FightingSpirit.minLevel"
        },
        "fistsOfFury": {
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
            "attribute": "fists-of-fury",
            "reflect": false,
            "defaultValue": "StrikerSkills.FistsOfFury.minLevel"
        },
        "giganticBurst": {
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
            "attribute": "gigantic-burst",
            "reflect": false,
            "defaultValue": "StrikerSkills.GiganticBurst.minLevel"
        },
        "guardDash": {
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
            "attribute": "guard-dash",
            "reflect": false,
            "defaultValue": "StrikerSkills.GuardDash.minLevel"
        },
        "guillotine": {
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
            "attribute": "guillotine",
            "reflect": false,
            "defaultValue": "StrikerSkills.Guillotine.minLevel"
        },
        "hurricaneCutter": {
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
            "attribute": "hurricane-cutter",
            "reflect": false,
            "defaultValue": "StrikerSkills.HurricaneCutter.minLevel"
        },
        "kickTechnician": {
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
            "attribute": "kick-technician",
            "reflect": false,
            "defaultValue": "StrikerSkills.KickTechnician.minLevel"
        },
        "knuckleMissile": {
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
            "attribute": "knuckle-missile",
            "reflect": false,
            "defaultValue": "StrikerSkills.KnuckleMissile.minLevel"
        },
        "magnumBlow": {
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
            "attribute": "magnum-blow",
            "reflect": false,
            "defaultValue": "StrikerSkills.MagnumBlow.minLevel"
        },
        "maharPunch": {
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
            "attribute": "mahar-punch",
            "reflect": false,
            "defaultValue": "StrikerSkills.MaharPunch.minLevel"
        },
        "overcome": {
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
            "attribute": "overcome",
            "reflect": false,
            "defaultValue": "StrikerSkills.Overcome.minLevel"
        },
        "paceControl": {
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
            "attribute": "pace-control",
            "reflect": false,
            "defaultValue": "StrikerSkills.PaceControl.minLevel"
        },
        "patternBreak": {
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
            "attribute": "pattern-break",
            "reflect": false,
            "defaultValue": "StrikerSkills.PatternBreak.minLevel"
        },
        "powerPuncher": {
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
            "attribute": "power-puncher",
            "reflect": false,
            "defaultValue": "StrikerSkills.PowerPuncher.minLevel"
        },
        "risingKick": {
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
            "attribute": "rising-kick",
            "reflect": false,
            "defaultValue": "StrikerSkills.RisingKick.minLevel"
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
            "propName": "extras",
            "methodName": "emitChangeEvent"
        }]; }
}
