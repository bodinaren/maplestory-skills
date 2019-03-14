import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as ThiefSkills from "../../../global/values/thief";
export class ThiefComponent {
    constructor() {
        this.editable = false;
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
    }
    componentWillLoad() {
        processSkills(this, ThiefSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, ThiefSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, ThiefSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ThiefSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "thief" }, renderLevelControls(this, ThiefSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-thief"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bladeDance": {
            "type": Number,
            "attr": "blade-dance",
            "mutable": true
        },
        "cunningTactics": {
            "type": Number,
            "attr": "cunning-tactics",
            "mutable": true
        },
        "deftCombatant": {
            "type": Number,
            "attr": "deft-combatant",
            "mutable": true
        },
        "doubleSlash": {
            "type": Number,
            "attr": "double-slash",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "getData": {
            "method": true
        },
        "haste": {
            "type": Number,
            "attr": "haste",
            "mutable": true
        },
        "mesoguardPlus": {
            "type": Number,
            "attr": "mesoguard-plus",
            "mutable": true
        },
        "mindBreaker": {
            "type": Number,
            "attr": "mind-breaker",
            "mutable": true
        },
        "mindStealer": {
            "type": Number,
            "attr": "mind-stealer",
            "mutable": true
        },
        "poisonEdge": {
            "type": Number,
            "attr": "poison-edge",
            "mutable": true
        },
        "poisonVial": {
            "type": Number,
            "attr": "poison-vial",
            "mutable": true
        },
        "quickStep": {
            "type": Number,
            "attr": "quick-step",
            "mutable": true
        },
        "retaliation": {
            "type": Number,
            "attr": "retaliation",
            "mutable": true
        },
        "ruthlessGuile": {
            "type": Number,
            "attr": "ruthless-guile",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "somersaultKick": {
            "type": Number,
            "attr": "somersault-kick",
            "mutable": true
        },
        "spiritThief": {
            "type": Number,
            "attr": "spirit-thief",
            "mutable": true
        },
        "surpriseAttack": {
            "type": Number,
            "attr": "surprise-attack",
            "mutable": true
        },
        "viciousCuts": {
            "type": Number,
            "attr": "vicious-cuts",
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
    static get style() { return "/**style-placeholder:ms-thief:**/"; }
}
