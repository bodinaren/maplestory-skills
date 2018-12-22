import { Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import { Sigil } from "./runeblade";
import * as RunebladeSkills from "../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade",
  styleUrls: ["runeblade.css"],
  shadow: true
})
export class RunebladeComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true }) extras: boolean = false;
  @Prop({ mutable: true, reflectToAttr: true }) sigil: Sigil = "";

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
    Object.keys(RunebladeSkills).map((prop) => {
      // create copies of each skill so we can toggle the extras for skill attunes
      this.runebladeSkills[prop] = { ...RunebladeSkills[prop] };
      // this.runebladeSkills[prop] = JSON.parse(JSON.stringify(RunebladeSkills[prop]));
    });

    processSkills(this, this.runebladeSkills);
    this.updateSigil();
  }

  @Method()
  async getSkills() {
    return toSkillChangeEventObject(this, RunebladeSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, this.runebladeSkills);

    if (skill.prop === this.sigil && level === 0) {
      this.changeSigil();
    } else { // else, to make sure we only emit one change event
      this.updateSigil();
      this.emitChangeEvent();
    }
  }

  private changeSigil(skill?: ISkill) {
    let sigil: Sigil = "";

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

        default: return; // don't do any changes if it wasn't a sigil that was clicked.
      }
    }

    if (sigil === this.sigil) this.sigil = "";
    else this.sigil = sigil;

    this.updateSigil();
    this.emitChangeEvent();
  }

  private updateSigil() {
    if (this.extras) {
      let sigilIdx = this.sigil === "flameSigil" ? 0
              : this.sigil === "frostSigil" ? 1
              : this.sigil === "stormSigil" ? 2
              : -1;

      Object.keys(this.runebladeSkills).forEach((prop: string) => {
        let originalSkill: ISkill = RunebladeSkills[prop];
        if (originalSkill.extras) {
          if (this.sigil) {
            this.runebladeSkills[prop] = {
              ...originalSkill,
              ...originalSkill.extras[sigilIdx],
              extras: [{
                description: "This skill is attuned to " +
                          (this.sigil === "flameSigil" ? RunebladeSkills.FlameSigil.name
                          : this.sigil === "frostSigil" ? RunebladeSkills.FrostSigil.name
                          : this.sigil === "stormSigil" ? RunebladeSkills.StormSigil.name
                          : "")
                          + "."
              }],
            };
          } else {
            this.runebladeSkills[prop] = {
              ...originalSkill,
              extras: [{
                description: "Click on a sigil to show how this skill attunes."
              }]
            };
          }
        } else if (["flameSigil", "frostSigil", "stormSigil"].indexOf(originalSkill.prop) > -1) {
          let description: string;

          if (this.sigil === originalSkill.prop) {
            description = "Click on the icon again to deactivate this sigil.";
          } else if (this[originalSkill.prop] > 0) {
            description = "Click on the icon to activate this sigil. All relevant skills will show information based on this sigil being active.";
          } else {
            description = "After putting points in this skill, click on the icon to activate the sigil. All relevant skills will show information based on this sigil being active.";
          }

          this.runebladeSkills[prop] = {
            ...originalSkill,
            extras: [{
              description: description,
            }],
          };
        }
      });
    }
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, this.runebladeSkills, this.sigil && { sigil: this.sigil } || undefined));
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
