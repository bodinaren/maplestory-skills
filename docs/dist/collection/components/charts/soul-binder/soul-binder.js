import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as SoulBinderSkills from "../../../global/values/soul-binder";
export class SoulBinderComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.animusFocus = SoulBinderSkills.AnimusFocus.minLevel;
        this.concussionOrb = SoulBinderSkills.ConcussionOrb.minLevel;
        this.soaringOrb = SoulBinderSkills.SoaringOrb.minLevel;
        this.ragingTempest = SoulBinderSkills.RagingTempest.minLevel;
        this.staticFlash = SoulBinderSkills.StaticFlash.minLevel;
        this.energySurge = SoulBinderSkills.EnergySurge.minLevel;
        this.expansionBlast = SoulBinderSkills.ExpansionBlast.minLevel;
        this.flashStrike = SoulBinderSkills.FlashStrike.minLevel;
        this.illusion = SoulBinderSkills.Illusion.minLevel;
        this.healingBond = SoulBinderSkills.HealingBond.minLevel;
        this.mantraArray = SoulBinderSkills.MantraArray.minLevel;
        this.narubashanUnleashed = SoulBinderSkills.NarubashanUnleashed.minLevel;
        this.orbMastery = SoulBinderSkills.OrbMastery.minLevel;
        this.radiantSalvo = SoulBinderSkills.RadiantSalvo.minLevel;
        this.shootingStar = SoulBinderSkills.ShootingStar.minLevel;
        this.lightBarrier = SoulBinderSkills.LightBarrier.minLevel;
        this.fountOfRenewal = SoulBinderSkills.FountOfRenewal.minLevel;
    }
    componentWillLoad() {
        processSkills(this, SoulBinderSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, SoulBinderSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, SoulBinderSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, SoulBinderSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "soul-binder" }, renderLevelControls(this, SoulBinderSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-soul-binder"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "animusFocus": {
            "type": Number,
            "attr": "animus-focus",
            "mutable": true
        },
        "concussionOrb": {
            "type": Number,
            "attr": "concussion-orb",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "energySurge": {
            "type": Number,
            "attr": "energy-surge",
            "mutable": true
        },
        "expansionBlast": {
            "type": Number,
            "attr": "expansion-blast",
            "mutable": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "flashStrike": {
            "type": Number,
            "attr": "flash-strike",
            "mutable": true
        },
        "fountOfRenewal": {
            "type": Number,
            "attr": "fount-of-renewal",
            "mutable": true
        },
        "getData": {
            "method": true
        },
        "healingBond": {
            "type": Number,
            "attr": "healing-bond",
            "mutable": true
        },
        "illusion": {
            "type": Number,
            "attr": "illusion",
            "mutable": true
        },
        "lightBarrier": {
            "type": Number,
            "attr": "light-barrier",
            "mutable": true
        },
        "mantraArray": {
            "type": Number,
            "attr": "mantra-array",
            "mutable": true
        },
        "narubashanUnleashed": {
            "type": Number,
            "attr": "narubashan-unleashed",
            "mutable": true
        },
        "orbMastery": {
            "type": Number,
            "attr": "orb-mastery",
            "mutable": true
        },
        "radiantSalvo": {
            "type": Number,
            "attr": "radiant-salvo",
            "mutable": true
        },
        "ragingTempest": {
            "type": Number,
            "attr": "raging-tempest",
            "mutable": true
        },
        "shootingStar": {
            "type": Number,
            "attr": "shooting-star",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "soaringOrb": {
            "type": Number,
            "attr": "soaring-orb",
            "mutable": true
        },
        "staticFlash": {
            "type": Number,
            "attr": "static-flash",
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
    static get style() { return "/**style-placeholder:ms-soul-binder:**/"; }
}
