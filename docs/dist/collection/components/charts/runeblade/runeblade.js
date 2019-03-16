import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as RunebladeSkills from "../../../global/values/runeblade";
export class RunebladeComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
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
        this.runebladeSkills = {};
    }
    componentWillLoad() {
        Object.keys(RunebladeSkills).map((prop) => {
            this.runebladeSkills[prop] = Object.assign({}, RunebladeSkills[prop]);
        });
        processSkills(this, this.runebladeSkills);
        this.updateSigil();
    }
    async getData() {
        return toSkillChangeEventObject(this, RunebladeSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, this.runebladeSkills, skill);
        if (skill.prop === this.sigil && level === 0) {
            this.changeSigil();
        }
        else {
            this.updateSigil();
            this.emitChangeEvent();
        }
    }
    changeSigil(skill) {
        if (!this.extras)
            return;
        let sigil = "";
        if (skill && this[skill.prop] > 0) {
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
                default: return;
            }
        }
        if (sigil === this.sigil)
            this.sigil = "";
        else
            this.sigil = sigil;
        this.updateSigil();
        this.emitChangeEvent();
    }
    updateSigil() {
        if (this.extras) {
            let sigilIdx = this.sigil === "flameSigil" ? 0
                : this.sigil === "frostSigil" ? 1
                    : this.sigil === "stormSigil" ? 2
                        : -1;
            Object.keys(this.runebladeSkills).forEach((prop) => {
                let originalSkill = RunebladeSkills[prop];
                if (originalSkill.extras) {
                    if (this.sigil) {
                        this.runebladeSkills[prop] = Object.assign({}, originalSkill, originalSkill.extras[sigilIdx], { extras: [{
                                    description: "This skill is attuned to " +
                                        (this.sigil === "flameSigil" ? RunebladeSkills.FlameSigil.name
                                            : this.sigil === "frostSigil" ? RunebladeSkills.FrostSigil.name
                                                : this.sigil === "stormSigil" ? RunebladeSkills.StormSigil.name
                                                    : "")
                                        + "."
                                }] });
                    }
                    else {
                        this.runebladeSkills[prop] = Object.assign({}, originalSkill, { extras: [{
                                    description: "Click on a sigil to show how this skill attunes."
                                }] });
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
                    this.runebladeSkills[prop] = Object.assign({}, originalSkill, { extras: [{
                                description: description,
                            }] });
                }
            });
        }
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, this.runebladeSkills, this.sigil && { sigil: this.sigil } || undefined));
    }
    render() {
        return ([
            this.renderStyles(),
            h("ms-chart", { msClass: "runeblade" }, renderLevelControls(this, this.runebladeSkills, this.editable, this.extras, {
                onSkillclicked: (evt) => this.changeSigil(evt.detail),
            }))
        ]);
    }
    renderStyles() {
        if (!this.extras)
            return;
        return (h("style", { type: "text/css" }, `
        :host([extras]) ms-skill:before { background: url(${this.publicPath}assets/skill-shield-selected.png) }
      `));
    }
    static get is() { return "ms-runeblade"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bladeChasm": {
            "type": Number,
            "attr": "blade-chasm",
            "mutable": true
        },
        "bladeMastery": {
            "type": Number,
            "attr": "blade-mastery",
            "mutable": true
        },
        "blink": {
            "type": Number,
            "attr": "blink",
            "mutable": true
        },
        "echoingBlade": {
            "type": Number,
            "attr": "echoing-blade",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "elementalPotency": {
            "type": Number,
            "attr": "elemental-potency",
            "mutable": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "reflectToAttr": true,
            "watchCallbacks": ["emitChangeEvent"]
        },
        "flameSigil": {
            "type": Number,
            "attr": "flame-sigil",
            "mutable": true
        },
        "flurry": {
            "type": Number,
            "attr": "flurry",
            "mutable": true
        },
        "frostSigil": {
            "type": Number,
            "attr": "frost-sigil",
            "mutable": true
        },
        "getData": {
            "method": true
        },
        "gravityRune": {
            "type": Number,
            "attr": "gravity-rune",
            "mutable": true
        },
        "honingRunes": {
            "type": Number,
            "attr": "honing-runes",
            "mutable": true
        },
        "illusoryBlades": {
            "type": Number,
            "attr": "illusory-blades",
            "mutable": true
        },
        "impact": {
            "type": Number,
            "attr": "impact",
            "mutable": true
        },
        "publicPath": {
            "context": "publicPath"
        },
        "runeBalance": {
            "type": Number,
            "attr": "rune-balance",
            "mutable": true
        },
        "runeFocus": {
            "type": Number,
            "attr": "rune-focus",
            "mutable": true
        },
        "sigil": {
            "type": String,
            "attr": "sigil",
            "reflectToAttr": true,
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "stormSigil": {
            "type": Number,
            "attr": "storm-sigil",
            "mutable": true
        },
        "wardingRune": {
            "type": Number,
            "attr": "warding-rune",
            "mutable": true
        },
        "whirlingBlades": {
            "type": Number,
            "attr": "whirling-blades",
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
    static get style() { return "/**style-placeholder:ms-runeblade:**/"; }
}
