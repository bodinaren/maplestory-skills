import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { BerserkerSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/berserker";
export class BerserkerComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.adrenalineRush = BerserkerSkills.AdrenalineRush.minLevel;
        this.bloodPrice = BerserkerSkills.BloodPrice.minLevel;
        this.bloodlust = BerserkerSkills.Bloodlust.minLevel;
        this.darkAura = BerserkerSkills.DarkAura.minLevel;
        this.darkBreaker = BerserkerSkills.DarkBreaker.minLevel;
        this.darkMight = BerserkerSkills.DarkMight.minLevel;
        this.deathSpin = BerserkerSkills.DeathSpin.minLevel;
        this.deepWounds = BerserkerSkills.DeepWounds.minLevel;
        this.earthquake = BerserkerSkills.Earthquake.minLevel;
        this.greatswordMastery = BerserkerSkills.GreatswordMastery.minLevel;
        this.groundBreaker = BerserkerSkills.GroundBreaker.minLevel;
        this.inhumanEndurance = BerserkerSkills.InhumanEndurance.minLevel;
        this.intimidation = BerserkerSkills.Intimidation.minLevel;
        this.ragingSlash = BerserkerSkills.RagingSlash.minLevel;
        this.voidSlash = BerserkerSkills.VoidSlash.minLevel;
        this.warriorsInstinct = BerserkerSkills.WarriorsInstinct.minLevel;
        this.xSlash = BerserkerSkills.XSlash.minLevel;
        this.infiniteDarkness = BerserkerSkills.InfiniteDarkness.minLevel;
        this.skullSplitter = BerserkerSkills.SkullSplitter.minLevel;
        this.bloodFury = BerserkerSkills.BloodFury.minLevel;
        this.parryTheMoon = BerserkerSkills.ParryTheMoon.minLevel;
        this.aerialSmash = BerserkerSkills.AerialSmash.minLevel;
        this.squall = BerserkerSkills.Squall.minLevel;
        this.rendWound = BerserkerSkills.RendWound.minLevel;
        this.ragingSoul = BerserkerSkills.RagingSoul.minLevel;
        this.bloodSlash = BerserkerSkills.BloodSlash.minLevel;
    }
    componentWillLoad() {
        processSkills(this, BerserkerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, BerserkerSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, BerserkerSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, BerserkerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "berserker", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    static get is() { return "ms-berserker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["berserker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["berserker.css"]
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
        "adrenalineRush": {
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
            "attribute": "adrenaline-rush",
            "reflect": false,
            "defaultValue": "BerserkerSkills.AdrenalineRush.minLevel"
        },
        "bloodPrice": {
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
            "attribute": "blood-price",
            "reflect": false,
            "defaultValue": "BerserkerSkills.BloodPrice.minLevel"
        },
        "bloodlust": {
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
            "attribute": "bloodlust",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Bloodlust.minLevel"
        },
        "darkAura": {
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
            "attribute": "dark-aura",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DarkAura.minLevel"
        },
        "darkBreaker": {
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
            "attribute": "dark-breaker",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DarkBreaker.minLevel"
        },
        "darkMight": {
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
            "attribute": "dark-might",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DarkMight.minLevel"
        },
        "deathSpin": {
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
            "attribute": "death-spin",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DeathSpin.minLevel"
        },
        "deepWounds": {
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
            "attribute": "deep-wounds",
            "reflect": false,
            "defaultValue": "BerserkerSkills.DeepWounds.minLevel"
        },
        "earthquake": {
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
            "attribute": "earthquake",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Earthquake.minLevel"
        },
        "greatswordMastery": {
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
            "attribute": "greatsword-mastery",
            "reflect": false,
            "defaultValue": "BerserkerSkills.GreatswordMastery.minLevel"
        },
        "groundBreaker": {
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
            "attribute": "ground-breaker",
            "reflect": false,
            "defaultValue": "BerserkerSkills.GroundBreaker.minLevel"
        },
        "inhumanEndurance": {
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
            "attribute": "inhuman-endurance",
            "reflect": false,
            "defaultValue": "BerserkerSkills.InhumanEndurance.minLevel"
        },
        "intimidation": {
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
            "attribute": "intimidation",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Intimidation.minLevel"
        },
        "ragingSlash": {
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
            "attribute": "raging-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.RagingSlash.minLevel"
        },
        "voidSlash": {
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
            "attribute": "void-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.VoidSlash.minLevel"
        },
        "warriorsInstinct": {
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
            "attribute": "warriors-instinct",
            "reflect": false,
            "defaultValue": "BerserkerSkills.WarriorsInstinct.minLevel"
        },
        "xSlash": {
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
            "attribute": "x-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.XSlash.minLevel"
        },
        "infiniteDarkness": {
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
            "attribute": "infinite-darkness",
            "reflect": false,
            "defaultValue": "BerserkerSkills.InfiniteDarkness.minLevel"
        },
        "skullSplitter": {
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
            "attribute": "skull-splitter",
            "reflect": false,
            "defaultValue": "BerserkerSkills.SkullSplitter.minLevel"
        },
        "bloodFury": {
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
            "attribute": "blood-fury",
            "reflect": false,
            "defaultValue": "BerserkerSkills.BloodFury.minLevel"
        },
        "parryTheMoon": {
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
            "attribute": "parry-the-moon",
            "reflect": false,
            "defaultValue": "BerserkerSkills.ParryTheMoon.minLevel"
        },
        "aerialSmash": {
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
            "attribute": "aerial-smash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.AerialSmash.minLevel"
        },
        "squall": {
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
            "attribute": "squall",
            "reflect": false,
            "defaultValue": "BerserkerSkills.Squall.minLevel"
        },
        "rendWound": {
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
            "attribute": "rend-wound",
            "reflect": false,
            "defaultValue": "BerserkerSkills.RendWound.minLevel"
        },
        "ragingSoul": {
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
            "attribute": "raging-soul",
            "reflect": false,
            "defaultValue": "BerserkerSkills.RagingSoul.minLevel"
        },
        "bloodSlash": {
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
            "attribute": "blood-slash",
            "reflect": false,
            "defaultValue": "BerserkerSkills.BloodSlash.minLevel"
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
