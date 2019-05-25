import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { ThiefSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/thief";
export class ThiefComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
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
        this.vengeance = ThiefSkills.Vengeance.minLevel;
        this.savageStrikes = ThiefSkills.SavageStrikes.minLevel;
        this.battlePlan = ThiefSkills.BattlePlan.minLevel;
        this.poisonMaster = ThiefSkills.PoisonMaster.minLevel;
        this.volatileVials = ThiefSkills.VolatileVials.minLevel;
        this.criticalSlice = ThiefSkills.CriticalSlice.minLevel;
        this.battleStep = ThiefSkills.BattleStep.minLevel;
        this.shadowStep = ThiefSkills.ShadowStep.minLevel;
        this.deadlyStrikes = ThiefSkills.DeadlyStrikes.minLevel;
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
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ThiefSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "thief", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
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
        },
        "vengeance": {
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
            "attribute": "vengeance",
            "reflect": false,
            "defaultValue": "ThiefSkills.Vengeance.minLevel"
        },
        "savageStrikes": {
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
            "attribute": "savage-strikes",
            "reflect": false,
            "defaultValue": "ThiefSkills.SavageStrikes.minLevel"
        },
        "battlePlan": {
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
            "attribute": "battle-plan",
            "reflect": false,
            "defaultValue": "ThiefSkills.BattlePlan.minLevel"
        },
        "poisonMaster": {
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
            "attribute": "poison-master",
            "reflect": false,
            "defaultValue": "ThiefSkills.PoisonMaster.minLevel"
        },
        "volatileVials": {
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
            "attribute": "volatile-vials",
            "reflect": false,
            "defaultValue": "ThiefSkills.VolatileVials.minLevel"
        },
        "criticalSlice": {
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
            "attribute": "critical-slice",
            "reflect": false,
            "defaultValue": "ThiefSkills.CriticalSlice.minLevel"
        },
        "battleStep": {
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
            "attribute": "battle-step",
            "reflect": false,
            "defaultValue": "ThiefSkills.BattleStep.minLevel"
        },
        "shadowStep": {
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
            "attribute": "shadow-step",
            "reflect": false,
            "defaultValue": "ThiefSkills.ShadowStep.minLevel"
        },
        "deadlyStrikes": {
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
            "attribute": "deadly-strikes",
            "reflect": false,
            "defaultValue": "ThiefSkills.DeadlyStrikes.minLevel"
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
        }, {
            "propName": "rank",
            "methodName": "emitChangeEvent"
        }]; }
}
