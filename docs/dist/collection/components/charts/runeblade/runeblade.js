var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { ConstructibleStyle } from "stencil-constructible-style";
import { getOptimizedAssetPath } from "../../../global/utils";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as RunebladeSkills from "../../../global/values/runeblade";
export class RunebladeComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.sigil = "";
        this.bladeChasm = RunebladeSkills.BladeChasm.minLevel;
        this.bladeMastery = RunebladeSkills.BladeMastery.minLevel;
        this.blink = RunebladeSkills.Blink.minLevel;
        this.elementalPotency = RunebladeSkills.ElementalPotency.minLevel;
        this.echoingBlade = RunebladeSkills.EchoingBlade.minLevel;
        this.flameSigil = RunebladeSkills.FlameSigil.minLevel;
        this.flurry = RunebladeSkills.Flurry.minLevel;
        this.frostSigil = RunebladeSkills.FrostSigil.minLevel;
        this.gravityRune = RunebladeSkills.GravityRune.minLevel;
        this.honingRunes = RunebladeSkills.HoningRunes.minLevel;
        this.illusoryBlades = RunebladeSkills.IllusoryBlades.minLevel;
        this.impact = RunebladeSkills.Impact.minLevel;
        this.runeBalance = RunebladeSkills.RuneBalance.minLevel;
        this.runeFocus = RunebladeSkills.RuneFocus.minLevel;
        this.stormSigil = RunebladeSkills.StormSigil.minLevel;
        this.wardingRune = RunebladeSkills.WardingRune.minLevel;
        this.whirlingBlades = RunebladeSkills.WhirlingBlades.minLevel;
        this.styles = RunebladeComponent.getStyles.bind(this);
        this.runebladeSkills = {};
    }
    componentWillLoad() {
        Object.keys(RunebladeSkills).map((prop) => {
            // create copies of each skill so we can toggle the extras for skill attunes
            this.runebladeSkills[prop] = Object.assign({}, RunebladeSkills[prop]);
        });
        processSkills(this, this.runebladeSkills);
        this.updateSigil();
    }
    async getData() {
        return toSkillChangeEventObject(this, RunebladeSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, this.runebladeSkills, skill);
        if (skill.prop === this.sigil && level === 0) {
            this.changeSigil();
        }
        else { // else, to make sure we only emit one change event
            this.updateSigil();
            this.emitChangeEvent();
        }
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, this.runebladeSkills, this.sigil && { sigil: this.sigil } || undefined));
    }
    render() {
        return ([
            h("ms-chart", { msClass: "runeblade" }, renderLevelControls(this, this.runebladeSkills, this.editable, this.extras, {
                onSkillclicked: (evt) => this.changeSigil(evt.detail),
            }))
        ]);
    }
    changeSigil(skill) {
        if (!this.extras)
            return;
        let sigil = "";
        if (skill) {
            switch (skill.prop) {
                case RunebladeSkills.FlameSigil.prop:
                    sigil = "flameSigil";
                    break;
                case RunebladeSkills.FrostSigil.prop:
                    sigil = "frostSigil";
                    break;
                case RunebladeSkills.StormSigil.prop:
                    sigil = "stormSigil";
                    break;
                default: return; // don't do any changes if it wasn't a sigil that was clicked.
            }
        }
        if (!skill || this[skill.prop] > 0) {
            if (sigil === this.sigil)
                this.sigil = "";
            else
                this.sigil = sigil;
            this.updateSigil();
            this.emitChangeEvent();
        }
    }
    updateSigil() {
        if (this.extras) {
            let sigilIdx = this.sigil === "flameSigil" ? 0
                : this.sigil === "frostSigil" ? 1
                    : this.sigil === "stormSigil" ? 2
                        : -1;
            Object.keys(this.runebladeSkills).forEach((prop) => {
                let originalSkill = RunebladeSkills[prop];
                if (originalSkill.extras) {
                    if (this.sigil) {
                        this.runebladeSkills[prop] = Object.assign({}, originalSkill, originalSkill.extras[sigilIdx], { extras: [{
                                    description: "This skill is attuned to " +
                                        (this.sigil === "flameSigil" ? RunebladeSkills.FlameSigil.name
                                            : this.sigil === "frostSigil" ? RunebladeSkills.FrostSigil.name
                                                : this.sigil === "stormSigil" ? RunebladeSkills.StormSigil.name
                                                    : "")
                                        + "."
                                }] });
                    }
                    else {
                        this.runebladeSkills[prop] = Object.assign({}, originalSkill, { extras: [{
                                    description: "Click on a sigil to show how this skill attunes."
                                }] });
                    }
                }
                else if (["flameSigil", "frostSigil", "stormSigil"].indexOf(originalSkill.prop) > -1) {
                    let description;
                    if (this.sigil === originalSkill.prop) {
                        description = "Click on the icon again to deactivate this sigil.";
                    }
                    else if (this[originalSkill.prop] > 0) {
                        description = "Click on the icon to activate this sigil. All relevant skills will show information based on this sigil being active.";
                    }
                    else {
                        description = "After putting points in this skill, click on the icon to activate the sigil. All relevant skills will show information based on this sigil being active.";
                    }
                    this.runebladeSkills[prop] = Object.assign({}, originalSkill, { extras: [{
                                description: description,
                            }] });
                }
            });
        }
    }
    static getStyles() {
        return `
      ms-runeblade[extras] ms-skill:before { background: url(${getOptimizedAssetPath(`assets/skill-shield-selected.png`)}) }
      :host([extras]) ms-skill:before { background: url(${getOptimizedAssetPath(`assets/skill-shield-selected.png`)}) }
    `;
    }
    static get is() { return "ms-runeblade"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["runeblade.css"]
    }; }
    static get styleUrls() { return {
        "$": ["runeblade.css"]
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
            "reflect": true,
            "defaultValue": "false"
        },
        "sigil": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "Sigil",
                "resolved": "\"\" | \"flameSigil\" | \"frostSigil\" | \"stormSigil\"",
                "references": {
                    "Sigil": {
                        "location": "import",
                        "path": "./runeblade-sigil"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "sigil",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "bladeChasm": {
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
            "attribute": "blade-chasm",
            "reflect": false,
            "defaultValue": "RunebladeSkills.BladeChasm.minLevel"
        },
        "bladeMastery": {
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
            "attribute": "blade-mastery",
            "reflect": false,
            "defaultValue": "RunebladeSkills.BladeMastery.minLevel"
        },
        "blink": {
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
            "attribute": "blink",
            "reflect": false,
            "defaultValue": "RunebladeSkills.Blink.minLevel"
        },
        "elementalPotency": {
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
            "attribute": "elemental-potency",
            "reflect": false,
            "defaultValue": "RunebladeSkills.ElementalPotency.minLevel"
        },
        "echoingBlade": {
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
            "attribute": "echoing-blade",
            "reflect": false,
            "defaultValue": "RunebladeSkills.EchoingBlade.minLevel"
        },
        "flameSigil": {
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
            "attribute": "flame-sigil",
            "reflect": false,
            "defaultValue": "RunebladeSkills.FlameSigil.minLevel"
        },
        "flurry": {
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
            "attribute": "flurry",
            "reflect": false,
            "defaultValue": "RunebladeSkills.Flurry.minLevel"
        },
        "frostSigil": {
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
            "attribute": "frost-sigil",
            "reflect": false,
            "defaultValue": "RunebladeSkills.FrostSigil.minLevel"
        },
        "gravityRune": {
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
            "attribute": "gravity-rune",
            "reflect": false,
            "defaultValue": "RunebladeSkills.GravityRune.minLevel"
        },
        "honingRunes": {
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
            "attribute": "honing-runes",
            "reflect": false,
            "defaultValue": "RunebladeSkills.HoningRunes.minLevel"
        },
        "illusoryBlades": {
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
            "attribute": "illusory-blades",
            "reflect": false,
            "defaultValue": "RunebladeSkills.IllusoryBlades.minLevel"
        },
        "impact": {
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
            "attribute": "impact",
            "reflect": false,
            "defaultValue": "RunebladeSkills.Impact.minLevel"
        },
        "runeBalance": {
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
            "attribute": "rune-balance",
            "reflect": false,
            "defaultValue": "RunebladeSkills.RuneBalance.minLevel"
        },
        "runeFocus": {
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
            "attribute": "rune-focus",
            "reflect": false,
            "defaultValue": "RunebladeSkills.RuneFocus.minLevel"
        },
        "stormSigil": {
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
            "attribute": "storm-sigil",
            "reflect": false,
            "defaultValue": "RunebladeSkills.StormSigil.minLevel"
        },
        "wardingRune": {
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
            "attribute": "warding-rune",
            "reflect": false,
            "defaultValue": "RunebladeSkills.WardingRune.minLevel"
        },
        "whirlingBlades": {
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
            "attribute": "whirling-blades",
            "reflect": false,
            "defaultValue": "RunebladeSkills.WhirlingBlades.minLevel"
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
__decorate([
    ConstructibleStyle({ cacheKeyProperty: "extras" })
], RunebladeComponent.prototype, "styles", void 0);
