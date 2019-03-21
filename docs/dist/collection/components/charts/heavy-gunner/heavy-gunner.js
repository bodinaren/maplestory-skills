import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as HeavyGunnerSkills from "../../../global/values/heavy-gunner";
export class HeavyGunnerComponent {
    constructor() {
        this.editable = false;
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
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, HeavyGunnerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "heavy-gunner" }, renderLevelControls(this, HeavyGunnerSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-heavy-gunner"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "advancedBullets": {
            "type": Number,
            "attr": "advanced-bullets",
            "mutable": true
        },
        "advancedMissiles": {
            "type": Number,
            "attr": "advanced-missiles",
            "mutable": true
        },
        "advancedPulseWeapons": {
            "type": Number,
            "attr": "advanced-pulse-weapons",
            "mutable": true
        },
        "blastChargeKit": {
            "type": Number,
            "attr": "blast-charge-kit",
            "mutable": true
        },
        "bulletSpray": {
            "type": Number,
            "attr": "bullet-spray",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "electricBlast": {
            "type": Number,
            "attr": "electric-blast",
            "mutable": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "gatlingFire": {
            "type": Number,
            "attr": "gatling-fire",
            "mutable": true
        },
        "getData": {
            "method": true
        },
        "homingMissiles": {
            "type": Number,
            "attr": "homing-missiles",
            "mutable": true
        },
        "jetBoots": {
            "type": Number,
            "attr": "jet-boots",
            "mutable": true
        },
        "lockOn": {
            "type": Number,
            "attr": "lock-on",
            "mutable": true
        },
        "magneticBomb": {
            "type": Number,
            "attr": "magnetic-bomb",
            "mutable": true
        },
        "mBomb": {
            "type": Number,
            "attr": "m-bomb",
            "mutable": true
        },
        "medKit": {
            "type": Number,
            "attr": "med-kit",
            "mutable": true
        },
        "reload": {
            "type": Number,
            "attr": "reload",
            "mutable": true
        },
        "rocketLauncher": {
            "type": Number,
            "attr": "rocket-launcher",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "stunGrenades": {
            "type": Number,
            "attr": "stun-grenades",
            "mutable": true
        },
        "suborbitalBombardment": {
            "type": Number,
            "attr": "suborbital-bombardment",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "skillchanged",
            "method": "onSkillChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ms-heavy-gunner:**/"; }
}
