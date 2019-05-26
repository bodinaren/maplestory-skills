var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { ConstructibleStyle } from "stencil-constructible-style";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { getOptimizedAssetPath } from "../../../global/utils";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { RunebladeSkills } from "../../../global/values/runeblade";
export class RunebladeComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
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
        this.physicalBoost = RunebladeSkills.PhysicalBoost.minLevel;
        this.quintupleCut = RunebladeSkills.QuintupleCut.minLevel;
        this.bladeWhip = RunebladeSkills.BladeWhip.minLevel;
        this.bladeExpert = RunebladeSkills.BladeExpert.minLevel;
        this.phantasmSlash = RunebladeSkills.PhantasmSlash.minLevel;
        this.runeTrigger = RunebladeSkills.RuneTrigger.minLevel;
        this.dimensionBlade = RunebladeSkills.DimensionBlade.minLevel;
        this.runeExpert = RunebladeSkills.RuneExpert.minLevel;
        this.runeIgnition = RunebladeSkills.RuneIgnition.minLevel;
        this.styles = RunebladeComponent.getStyles;
        this.runebladeSkills = {};
        this.rankOneSkills = {};
        this.rankTwoSkills = {};
    }
    componentWillLoad() {
        Object.keys(RunebladeSkills).map((key) => {
            // create copies of each skill so we can toggle the extras for skill attunes
            this.updateSkill(key, Object.assign({}, RunebladeSkills[key]));
        });
        processSkills(this, this.runebladeSkills, this.ignoreMax);
        this.updateSigil();
    }
    async getData() {
        return toSkillChangeEventObject(this, RunebladeSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, this.runebladeSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        if (skill.prop === this.sigil && level === 0) {
            this.changeSigil();
        }
        else { // else, to make sure we only emit one change event
            this.updateSigil();
            this.emitChangeEvent();
        }
    }
    ignoreMaxChanged() {
        processSkills(this, this.runebladeSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, this.runebladeSkills, this.sigil && { sigil: this.sigil } || undefined));
    }
    render() {
        return ([
            h("ms-chart", { msClass: "runeblade", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
                renderLevelControls(this, this.rankOneSkills, this.editable, this.extras, Rank.Basic, {
                    onSkillclicked: (evt) => this.changeSigil(evt.detail),
                }),
                renderLevelControls(this, this.rankTwoSkills, this.editable, this.extras, Rank.Awakening, {
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
            Object.keys(this.runebladeSkills).forEach((key) => {
                let originalSkill = RunebladeSkills[key];
                if (originalSkill.extras) {
                    if (this.sigil) {
                        this.updateSkill(key, Object.assign({}, originalSkill, originalSkill.extras[sigilIdx], { extras: [{
                                    description: "This skill is attuned to " +
                                        (this.sigil === "flameSigil" ? RunebladeSkills.FlameSigil.name
                                            : this.sigil === "frostSigil" ? RunebladeSkills.FrostSigil.name
                                                : this.sigil === "stormSigil" ? RunebladeSkills.StormSigil.name
                                                    : "")
                                        + "."
                                }] }));
                    }
                    else {
                        this.updateSkill(key, Object.assign({}, originalSkill, { extras: [{
                                    description: "Click on a sigil to show how this skill attunes."
                                }] }));
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
                    this.updateSkill(key, Object.assign({}, originalSkill, { extras: [{
                                description: description,
                            }] }));
                }
            });
        }
    }
    updateSkill(key, skill) {
        this.runebladeSkills[key] = skill;
        if (skill.rank === Rank.Basic) {
            this.rankOneSkills[key] = skill;
        }
        else {
            this.rankTwoSkills[key] = skill;
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
            "reflect": true,
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
        },
        "physicalBoost": {
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
            "attribute": "physical-boost",
            "reflect": false,
            "defaultValue": "RunebladeSkills.PhysicalBoost.minLevel"
        },
        "quintupleCut": {
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
            "attribute": "quintuple-cut",
            "reflect": false,
            "defaultValue": "RunebladeSkills.QuintupleCut.minLevel"
        },
        "bladeWhip": {
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
            "attribute": "blade-whip",
            "reflect": false,
            "defaultValue": "RunebladeSkills.BladeWhip.minLevel"
        },
        "bladeExpert": {
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
            "attribute": "blade-expert",
            "reflect": false,
            "defaultValue": "RunebladeSkills.BladeExpert.minLevel"
        },
        "phantasmSlash": {
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
            "attribute": "phantasm-slash",
            "reflect": false,
            "defaultValue": "RunebladeSkills.PhantasmSlash.minLevel"
        },
        "runeTrigger": {
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
            "attribute": "rune-trigger",
            "reflect": false,
            "defaultValue": "RunebladeSkills.RuneTrigger.minLevel"
        },
        "dimensionBlade": {
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
            "attribute": "dimension-blade",
            "reflect": false,
            "defaultValue": "RunebladeSkills.DimensionBlade.minLevel"
        },
        "runeExpert": {
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
            "attribute": "rune-expert",
            "reflect": false,
            "defaultValue": "RunebladeSkills.RuneExpert.minLevel"
        },
        "runeIgnition": {
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
            "attribute": "rune-ignition",
            "reflect": false,
            "defaultValue": "RunebladeSkills.RuneIgnition.minLevel"
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
__decorate([
    ConstructibleStyle({ cacheKeyProperty: "extras" })
], RunebladeComponent.prototype, "styles", void 0);
