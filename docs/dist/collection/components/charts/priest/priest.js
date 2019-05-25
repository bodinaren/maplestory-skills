import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { PriestSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/priest";
export class PriestComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.heavenlyWings = PriestSkills.HeavenlyWings.minLevel;
        this.steadfastFaith = PriestSkills.SteadfastFaith.minLevel;
        this.celestialLight = PriestSkills.CelestialLight.minLevel;
        this.holyBlast = PriestSkills.HolyBlast.minLevel;
        this.healingPrayer = PriestSkills.HealingPrayer.minLevel;
        this.scepterMastery = PriestSkills.ScepterMastery.minLevel;
        this.celestialGuardian = PriestSkills.CelestialGuardian.minLevel;
        this.shieldOfTheArchon = PriestSkills.ShieldOfTheArchon.minLevel;
        this.scourgingWave = PriestSkills.ScourgingWave.minLevel;
        this.celestialBlessings = PriestSkills.CelestialBlessings.minLevel;
        this.holyRelic = PriestSkills.HolyRelic.minLevel;
        this.sanctuary = PriestSkills.Sanctuary.minLevel;
        this.holySymbol = PriestSkills.HolySymbol.minLevel;
        this.healingMastery = PriestSkills.HealingMastery.minLevel;
        this.smitingAura = PriestSkills.SmitingAura.minLevel;
        this.disciple = PriestSkills.Disciple.minLevel;
        this.angelicRay = PriestSkills.AngelicRay.minLevel;
        this.lifesGuardian = PriestSkills.LifesGuardian.minLevel;
        this.scathingLight = PriestSkills.ScathingLight.minLevel;
        this.lightSpear = PriestSkills.LightSpear.minLevel;
        this.clarity = PriestSkills.Clarity.minLevel;
        this.heavensWrath = PriestSkills.HeavensWrath.minLevel;
        this.purifyingLight = PriestSkills.PurifyingLight.minLevel;
        this.divineWave = PriestSkills.DivineWave.minLevel;
        this.greaterHealing = PriestSkills.GreaterHealing.minLevel;
        this.vitality = PriestSkills.Vitality.minLevel;
    }
    componentWillLoad() {
        processSkills(this, PriestSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, PriestSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, PriestSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, PriestSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "priest", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    static get is() { return "ms-priest"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["priest.css"]
    }; }
    static get styleUrls() { return {
        "$": ["priest.css"]
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
        "heavenlyWings": {
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
            "attribute": "heavenly-wings",
            "reflect": false,
            "defaultValue": "PriestSkills.HeavenlyWings.minLevel"
        },
        "steadfastFaith": {
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
            "attribute": "steadfast-faith",
            "reflect": false,
            "defaultValue": "PriestSkills.SteadfastFaith.minLevel"
        },
        "celestialLight": {
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
            "attribute": "celestial-light",
            "reflect": false,
            "defaultValue": "PriestSkills.CelestialLight.minLevel"
        },
        "holyBlast": {
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
            "attribute": "holy-blast",
            "reflect": false,
            "defaultValue": "PriestSkills.HolyBlast.minLevel"
        },
        "healingPrayer": {
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
            "attribute": "healing-prayer",
            "reflect": false,
            "defaultValue": "PriestSkills.HealingPrayer.minLevel"
        },
        "scepterMastery": {
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
            "attribute": "scepter-mastery",
            "reflect": false,
            "defaultValue": "PriestSkills.ScepterMastery.minLevel"
        },
        "celestialGuardian": {
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
            "attribute": "celestial-guardian",
            "reflect": false,
            "defaultValue": "PriestSkills.CelestialGuardian.minLevel"
        },
        "shieldOfTheArchon": {
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
            "attribute": "shield-of-the-archon",
            "reflect": false,
            "defaultValue": "PriestSkills.ShieldOfTheArchon.minLevel"
        },
        "scourgingWave": {
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
            "attribute": "scourging-wave",
            "reflect": false,
            "defaultValue": "PriestSkills.ScourgingWave.minLevel"
        },
        "celestialBlessings": {
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
            "attribute": "celestial-blessings",
            "reflect": false,
            "defaultValue": "PriestSkills.CelestialBlessings.minLevel"
        },
        "holyRelic": {
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
            "attribute": "holy-relic",
            "reflect": false,
            "defaultValue": "PriestSkills.HolyRelic.minLevel"
        },
        "sanctuary": {
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
            "attribute": "sanctuary",
            "reflect": false,
            "defaultValue": "PriestSkills.Sanctuary.minLevel"
        },
        "holySymbol": {
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
            "attribute": "holy-symbol",
            "reflect": false,
            "defaultValue": "PriestSkills.HolySymbol.minLevel"
        },
        "healingMastery": {
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
            "attribute": "healing-mastery",
            "reflect": false,
            "defaultValue": "PriestSkills.HealingMastery.minLevel"
        },
        "smitingAura": {
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
            "attribute": "smiting-aura",
            "reflect": false,
            "defaultValue": "PriestSkills.SmitingAura.minLevel"
        },
        "disciple": {
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
            "attribute": "disciple",
            "reflect": false,
            "defaultValue": "PriestSkills.Disciple.minLevel"
        },
        "angelicRay": {
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
            "attribute": "angelic-ray",
            "reflect": false,
            "defaultValue": "PriestSkills.AngelicRay.minLevel"
        },
        "lifesGuardian": {
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
            "attribute": "lifes-guardian",
            "reflect": false,
            "defaultValue": "PriestSkills.LifesGuardian.minLevel"
        },
        "scathingLight": {
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
            "attribute": "scathing-light",
            "reflect": false,
            "defaultValue": "PriestSkills.ScathingLight.minLevel"
        },
        "lightSpear": {
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
            "attribute": "light-spear",
            "reflect": false,
            "defaultValue": "PriestSkills.LightSpear.minLevel"
        },
        "clarity": {
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
            "attribute": "clarity",
            "reflect": false,
            "defaultValue": "PriestSkills.Clarity.minLevel"
        },
        "heavensWrath": {
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
            "attribute": "heavens-wrath",
            "reflect": false,
            "defaultValue": "PriestSkills.HeavensWrath.minLevel"
        },
        "purifyingLight": {
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
            "attribute": "purifying-light",
            "reflect": false,
            "defaultValue": "PriestSkills.PurifyingLight.minLevel"
        },
        "divineWave": {
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
            "attribute": "divine-wave",
            "reflect": false,
            "defaultValue": "PriestSkills.DivineWave.minLevel"
        },
        "greaterHealing": {
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
            "attribute": "greater-healing",
            "reflect": false,
            "defaultValue": "PriestSkills.GreaterHealing.minLevel"
        },
        "vitality": {
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
            "attribute": "vitality",
            "reflect": false,
            "defaultValue": "PriestSkills.Vitality.minLevel"
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
