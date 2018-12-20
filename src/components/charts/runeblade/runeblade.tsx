import { Component, Prop, State, Event, EventEmitter, Method } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as RunebladeSkills from "../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade",
  styleUrls: ["runeblade.css"],
  shadow: true
})
export class RunebladeComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true }) extras: boolean = false;
  @Prop({ mutable: true, reflectToAttr: true }) private sigil: number = -1;

  @Prop({ mutable: true }) bladeChasm: number = RunebladeSkills.BladeChasm.minLevel;
  @Prop({ mutable: true }) bladeMastery: number = RunebladeSkills.BladeMastery.minLevel;
  @Prop({ mutable: true }) blink: number = RunebladeSkills.Blink.minLevel;
  @Prop({ mutable: true }) elementalPotency: number = RunebladeSkills.ElementalPotency.minLevel;
  @Prop({ mutable: true }) echoingBlade: number = RunebladeSkills.EchoingBlade.minLevel;
  @Prop({ mutable: true }) flameSigil: number = RunebladeSkills.FlameSigil.minLevel;
  @Prop({ mutable: true }) flurry: number = RunebladeSkills.Flurry.minLevel;
  @Prop({ mutable: true }) frostSigil: number = RunebladeSkills.FrostSigil.minLevel;
  @Prop({ mutable: true }) gravityRune: number = RunebladeSkills.GravityRune.minLevel;
  @Prop({ mutable: true }) honingRunes: number = RunebladeSkills.HoningRunes.minLevel;
  @Prop({ mutable: true }) illusoryBlades: number = RunebladeSkills.IllusoryBlades.minLevel;
  @Prop({ mutable: true }) impact: number = RunebladeSkills.Impact.minLevel;
  @Prop({ mutable: true }) runeBalance: number = RunebladeSkills.RuneBalance.minLevel;
  @Prop({ mutable: true }) runeFocus: number = RunebladeSkills.RuneFocus.minLevel;
  @Prop({ mutable: true }) stormSigil: number = RunebladeSkills.StormSigil.minLevel;
  @Prop({ mutable: true }) wardingRune: number = RunebladeSkills.WardingRune.minLevel;
  @Prop({ mutable: true }) whirlingBlades: number = RunebladeSkills.WhirlingBlades.minLevel;

  @Prop({ context: "publicPath" }) private publicPath: string;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  private runebladeSkills: { [prop: string]: ISkill } = {};

  componentWillLoad() {
    // this.runebladeSkills = { ...RunebladeSkills };
    Object.keys(RunebladeSkills).map((prop) => {
      let skill: ISkill = RunebladeSkills[prop];
      this.runebladeSkills[prop] = { ...skill };
    });

    processSkills(this, this.runebladeSkills);
    this.updateSigil();

    console.log(this.runebladeSkills);
  }

  @Method()
  async getSkills() {
    return toSkillChangeObject(this, RunebladeSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, this.runebladeSkills);
    this.updateSigil();

    this.onSkillChanged.emit(toSkillChangeObject(this, this.runebladeSkills));
  }

  private changeSigil(skill: ISkill) {
    let sigil = -1;

    switch (skill.prop) {
      case RunebladeSkills.FlameSigil.prop:
        sigil = 0;
        break;

      case RunebladeSkills.FrostSigil.prop:
        sigil = 1;
        break;

      case RunebladeSkills.StormSigil.prop:
        sigil = 2;
        break;

      default: return; // don't do any changes if it wasn't a sigil that was clicked.
    }

    if (sigil === this.sigil) this.sigil = -1;
    else this.sigil = sigil;

    this.updateSigil();
  }

  private updateSigil() {
    Object.keys(this.runebladeSkills).forEach((prop: string) => {
      let skill: ISkill = RunebladeSkills[prop];
      if (skill.extras) {
        if (this.sigil > -1) {
          this.runebladeSkills[prop] = { ...skill, extras: [skill.extras[this.sigil]] };
        } else {
          this.runebladeSkills[prop] = {
            ...skill,
            extras: [{
              description: "Click on a sigil to show here how this skill attunes."
            }]
          };
        }
      }
    });
  }

  render() {
    return ([
      this.extras && <style>{`
        :host([extras]) ms-skill:before { background: url(${ this.publicPath }assets/skill-shield-selected.png) }
      `}</style>,
      <ms-chart msClass="runeblade">
        { renderLevelControls(this, this.runebladeSkills, this.editable, this.extras, {
          onSkillclicked: (evt) => this.changeSigil(evt.detail),
        }) }
      </ms-chart>
    ]);
  }
}
