import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { WizardSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/wizard";
export class WizardComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.arcaneBlast = WizardSkills.ArcaneBlast.minLevel;
        this.chainLightning = WizardSkills.ChainLightning.minLevel;
        this.cryomancy = WizardSkills.Cryomancy.minLevel;
        this.electromancy = WizardSkills.Electromancy.minLevel;
        this.elementalMaster = WizardSkills.ElementalMaster.minLevel;
        this.flameTornado = WizardSkills.FlameTornado.minLevel;
        this.flameWave = WizardSkills.FlameWave.minLevel;
        this.focusSeal = WizardSkills.FocusSeal.minLevel;
        this.iceSpear = WizardSkills.IceSpear.minLevel;
        this.iceStorm = WizardSkills.IceStorm.minLevel;
        this.magicArmor = WizardSkills.MagicArmor.minLevel;
        this.manaClaw = WizardSkills.ManaClaw.minLevel;
        this.manaFont = WizardSkills.ManaFont.minLevel;
        this.phantomClaw = WizardSkills.PhantomClaw.minLevel;
        this.pyromancy = WizardSkills.Pyromancy.minLevel;
        this.teleport = WizardSkills.Teleport.minLevel;
        this.thunderbolt = WizardSkills.Thunderbolt.minLevel;
        this.manaControl = WizardSkills.ManaControl.minLevel;
        this.dualCast = WizardSkills.DualCast.minLevel;
        this.iceCreamTime = WizardSkills.IceCreamTime.minLevel;
        this.lodestoneField = WizardSkills.LodestoneField.minLevel;
        this.perfectStorm = WizardSkills.PerfectStorm.minLevel;
        this.ember = WizardSkills.Ember.minLevel;
        this.barbecueParty = WizardSkills.BarbecueParty.minLevel;
        this.playingWithFire = WizardSkills.PlayingWithFire.minLevel;
        this.littleMeteor = WizardSkills.LittleMeteor.minLevel;
    }
    componentWillLoad() {
        processSkills(this, WizardSkills, this.ignoreMax);
    }
    async getData() {
        return toSkillChangeEventObject(this, WizardSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, WizardSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    ignoreMaxChanged() {
        processSkills(this, WizardSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, WizardSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "wizard", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    static get is() { return "ms-wizard"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wizard.css"]
    }; }
    static get styleUrls() { return {
        "$": ["wizard.css"]
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
        "arcaneBlast": {
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
            "attribute": "arcane-blast",
            "reflect": false,
            "defaultValue": "WizardSkills.ArcaneBlast.minLevel"
        },
        "chainLightning": {
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
            "attribute": "chain-lightning",
            "reflect": false,
            "defaultValue": "WizardSkills.ChainLightning.minLevel"
        },
        "cryomancy": {
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
            "attribute": "cryomancy",
            "reflect": false,
            "defaultValue": "WizardSkills.Cryomancy.minLevel"
        },
        "electromancy": {
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
            "attribute": "electromancy",
            "reflect": false,
            "defaultValue": "WizardSkills.Electromancy.minLevel"
        },
        "elementalMaster": {
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
            "attribute": "elemental-master",
            "reflect": false,
            "defaultValue": "WizardSkills.ElementalMaster.minLevel"
        },
        "flameTornado": {
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
            "attribute": "flame-tornado",
            "reflect": false,
            "defaultValue": "WizardSkills.FlameTornado.minLevel"
        },
        "flameWave": {
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
            "attribute": "flame-wave",
            "reflect": false,
            "defaultValue": "WizardSkills.FlameWave.minLevel"
        },
        "focusSeal": {
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
            "attribute": "focus-seal",
            "reflect": false,
            "defaultValue": "WizardSkills.FocusSeal.minLevel"
        },
        "iceSpear": {
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
            "attribute": "ice-spear",
            "reflect": false,
            "defaultValue": "WizardSkills.IceSpear.minLevel"
        },
        "iceStorm": {
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
            "attribute": "ice-storm",
            "reflect": false,
            "defaultValue": "WizardSkills.IceStorm.minLevel"
        },
        "magicArmor": {
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
            "attribute": "magic-armor",
            "reflect": false,
            "defaultValue": "WizardSkills.MagicArmor.minLevel"
        },
        "manaClaw": {
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
            "attribute": "mana-claw",
            "reflect": false,
            "defaultValue": "WizardSkills.ManaClaw.minLevel"
        },
        "manaFont": {
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
            "attribute": "mana-font",
            "reflect": false,
            "defaultValue": "WizardSkills.ManaFont.minLevel"
        },
        "phantomClaw": {
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
            "attribute": "phantom-claw",
            "reflect": false,
            "defaultValue": "WizardSkills.PhantomClaw.minLevel"
        },
        "pyromancy": {
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
            "attribute": "pyromancy",
            "reflect": false,
            "defaultValue": "WizardSkills.Pyromancy.minLevel"
        },
        "teleport": {
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
            "attribute": "teleport",
            "reflect": false,
            "defaultValue": "WizardSkills.Teleport.minLevel"
        },
        "thunderbolt": {
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
            "attribute": "thunderbolt",
            "reflect": false,
            "defaultValue": "WizardSkills.Thunderbolt.minLevel"
        },
        "manaControl": {
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
            "attribute": "mana-control",
            "reflect": false,
            "defaultValue": "WizardSkills.ManaControl.minLevel"
        },
        "dualCast": {
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
            "attribute": "dual-cast",
            "reflect": false,
            "defaultValue": "WizardSkills.DualCast.minLevel"
        },
        "iceCreamTime": {
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
            "attribute": "ice-cream-time",
            "reflect": false,
            "defaultValue": "WizardSkills.IceCreamTime.minLevel"
        },
        "lodestoneField": {
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
            "attribute": "lodestone-field",
            "reflect": false,
            "defaultValue": "WizardSkills.LodestoneField.minLevel"
        },
        "perfectStorm": {
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
            "attribute": "perfect-storm",
            "reflect": false,
            "defaultValue": "WizardSkills.PerfectStorm.minLevel"
        },
        "ember": {
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
            "attribute": "ember",
            "reflect": false,
            "defaultValue": "WizardSkills.Ember.minLevel"
        },
        "barbecueParty": {
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
            "attribute": "barbecue-party",
            "reflect": false,
            "defaultValue": "WizardSkills.BarbecueParty.minLevel"
        },
        "playingWithFire": {
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
            "attribute": "playing-with-fire",
            "reflect": false,
            "defaultValue": "WizardSkills.PlayingWithFire.minLevel"
        },
        "littleMeteor": {
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
            "attribute": "little-meteor",
            "reflect": false,
            "defaultValue": "WizardSkills.LittleMeteor.minLevel"
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
