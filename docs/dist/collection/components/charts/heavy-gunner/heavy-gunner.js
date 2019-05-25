import { h } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { HeavyGunnerSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/heavy-gunner";
export class HeavyGunnerComponent {
    constructor() {
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.advancedBullets = HeavyGunnerSkills.AdvancedBullets.minLevel;
        this.advancedMissiles = HeavyGunnerSkills.AdvancedMissiles.minLevel;
        this.advancedPulseWeapons = HeavyGunnerSkills.AdvancedPulseWeapons.minLevel;
        this.blastChargeKit = HeavyGunnerSkills.BlastChargeKit.minLevel;
        this.bulletSpray = HeavyGunnerSkills.BulletSpray.minLevel;
        this.electricBlast = HeavyGunnerSkills.ElectricBlast.minLevel;
        this.gatlingFire = HeavyGunnerSkills.GatlingFire.minLevel;
        this.homingMissiles = HeavyGunnerSkills.HomingMissiles.minLevel;
        this.jetBoots = HeavyGunnerSkills.JetBoots.minLevel;
        this.lockOn = HeavyGunnerSkills.LockOn.minLevel;
        this.magneticBomb = HeavyGunnerSkills.MagneticBomb.minLevel;
        this.mBomb = HeavyGunnerSkills.MBomb.minLevel;
        this.medKit = HeavyGunnerSkills.MedKit.minLevel;
        this.reload = HeavyGunnerSkills.Reload.minLevel;
        this.rocketLauncher = HeavyGunnerSkills.RocketLauncher.minLevel;
        this.stunGrenades = HeavyGunnerSkills.StunGrenades.minLevel;
        this.suborbitalBombardment = HeavyGunnerSkills.SuborbitalBombardment.minLevel;
        this.mobileArmory = HeavyGunnerSkills.MobileArmory.minLevel;
        this.focusedFire = HeavyGunnerSkills.FocusedFire.minLevel;
        this.fireBomber = HeavyGunnerSkills.FireBomber.minLevel;
        this.missileSupercharger = HeavyGunnerSkills.MissileSupercharger.minLevel;
        this.demolitionCannon = HeavyGunnerSkills.DemolitionCannon.minLevel;
        this.plasmaChain = HeavyGunnerSkills.PlasmaChain.minLevel;
        this.skyHunter = HeavyGunnerSkills.SkyHunter.minLevel;
        this.plasmaSupercharger = HeavyGunnerSkills.PlasmaSupercharger.minLevel;
        this.hyperGigaCannon = HeavyGunnerSkills.HyperGigaCannon.minLevel;
    }
    componentWillLoad() {
        processSkills(this, HeavyGunnerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, HeavyGunnerSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, HeavyGunnerSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, HeavyGunnerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "heavy-gunner", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail },
            renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic),
            renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    static get is() { return "ms-heavy-gunner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["heavy-gunner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["heavy-gunner.css"]
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
        "advancedBullets": {
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
            "attribute": "advanced-bullets",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.AdvancedBullets.minLevel"
        },
        "advancedMissiles": {
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
            "attribute": "advanced-missiles",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.AdvancedMissiles.minLevel"
        },
        "advancedPulseWeapons": {
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
            "attribute": "advanced-pulse-weapons",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.AdvancedPulseWeapons.minLevel"
        },
        "blastChargeKit": {
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
            "attribute": "blast-charge-kit",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.BlastChargeKit.minLevel"
        },
        "bulletSpray": {
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
            "attribute": "bullet-spray",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.BulletSpray.minLevel"
        },
        "electricBlast": {
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
            "attribute": "electric-blast",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.ElectricBlast.minLevel"
        },
        "gatlingFire": {
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
            "attribute": "gatling-fire",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.GatlingFire.minLevel"
        },
        "homingMissiles": {
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
            "attribute": "homing-missiles",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.HomingMissiles.minLevel"
        },
        "jetBoots": {
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
            "attribute": "jet-boots",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.JetBoots.minLevel"
        },
        "lockOn": {
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
            "attribute": "lock-on",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.LockOn.minLevel"
        },
        "magneticBomb": {
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
            "attribute": "magnetic-bomb",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.MagneticBomb.minLevel"
        },
        "mBomb": {
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
            "attribute": "m-bomb",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.MBomb.minLevel"
        },
        "medKit": {
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
            "attribute": "med-kit",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.MedKit.minLevel"
        },
        "reload": {
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
            "attribute": "reload",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.Reload.minLevel"
        },
        "rocketLauncher": {
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
            "attribute": "rocket-launcher",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.RocketLauncher.minLevel"
        },
        "stunGrenades": {
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
            "attribute": "stun-grenades",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.StunGrenades.minLevel"
        },
        "suborbitalBombardment": {
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
            "attribute": "suborbital-bombardment",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.SuborbitalBombardment.minLevel"
        },
        "mobileArmory": {
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
            "attribute": "mobile-armory",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.MobileArmory.minLevel"
        },
        "focusedFire": {
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
            "attribute": "focused-fire",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.FocusedFire.minLevel"
        },
        "fireBomber": {
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
            "attribute": "fire-bomber",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.FireBomber.minLevel"
        },
        "missileSupercharger": {
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
            "attribute": "missile-supercharger",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.MissileSupercharger.minLevel"
        },
        "demolitionCannon": {
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
            "attribute": "demolition-cannon",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.DemolitionCannon.minLevel"
        },
        "plasmaChain": {
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
            "attribute": "plasma-chain",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.PlasmaChain.minLevel"
        },
        "skyHunter": {
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
            "attribute": "sky-hunter",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.SkyHunter.minLevel"
        },
        "plasmaSupercharger": {
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
            "attribute": "plasma-supercharger",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.PlasmaSupercharger.minLevel"
        },
        "hyperGigaCannon": {
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
            "attribute": "hyper-giga-cannon",
            "reflect": false,
            "defaultValue": "HeavyGunnerSkills.HyperGigaCannon.minLevel"
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
