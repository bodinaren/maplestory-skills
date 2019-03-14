import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as WizardSkills from "../../../global/values/wizard";
export class WizardComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
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
    }
    componentWillLoad() {
        processSkills(this, WizardSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, WizardSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, WizardSkills, skill);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, WizardSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "wizard" }, renderLevelControls(this, WizardSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-wizard"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "arcaneBlast": {
            "type": Number,
            "attr": "arcane-blast",
            "mutable": true
        },
        "chainLightning": {
            "type": Number,
            "attr": "chain-lightning",
            "mutable": true
        },
        "cryomancy": {
            "type": Number,
            "attr": "cryomancy",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "electromancy": {
            "type": Number,
            "attr": "electromancy",
            "mutable": true
        },
        "elementalMaster": {
            "type": Number,
            "attr": "elemental-master",
            "mutable": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "flameTornado": {
            "type": Number,
            "attr": "flame-tornado",
            "mutable": true
        },
        "flameWave": {
            "type": Number,
            "attr": "flame-wave",
            "mutable": true
        },
        "focusSeal": {
            "type": Number,
            "attr": "focus-seal",
            "mutable": true
        },
        "getData": {
            "method": true
        },
        "iceSpear": {
            "type": Number,
            "attr": "ice-spear",
            "mutable": true
        },
        "iceStorm": {
            "type": Number,
            "attr": "ice-storm",
            "mutable": true
        },
        "magicArmor": {
            "type": Number,
            "attr": "magic-armor",
            "mutable": true
        },
        "manaClaw": {
            "type": Number,
            "attr": "mana-claw",
            "mutable": true
        },
        "manaFont": {
            "type": Number,
            "attr": "mana-font",
            "mutable": true
        },
        "phantomClaw": {
            "type": Number,
            "attr": "phantom-claw",
            "mutable": true
        },
        "pyromancy": {
            "type": Number,
            "attr": "pyromancy",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "teleport": {
            "type": Number,
            "attr": "teleport",
            "mutable": true
        },
        "thunderbolt": {
            "type": Number,
            "attr": "thunderbolt",
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
    static get style() { return "/**style-placeholder:ms-wizard:**/"; }
}
