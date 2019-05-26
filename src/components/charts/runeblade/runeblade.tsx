import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { ConstructibleStyle } from "stencil-constructible-style";
import { ISkill, Rank, IAwakenedSkill, ISkillBase } from "../../../global/values/_skillValues.interfaces";
import { getOptimizedAssetPath } from "../../../global/utils";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { Sigil } from "./runeblade-sigil";
import { RunebladeSkills } from "../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade",
  styleUrls: ["runeblade.css"],
  shadow: true
})
export class RunebladeComponent implements IChart {

  @Element() host: HTMLMsRunebladeElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop({ reflectToAttr: true }) extras: boolean = false;
  @Prop() ignoreMax: boolean = false;
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

  @Prop({ mutable: true }) physicalBoost: number = RunebladeSkills.PhysicalBoost.minLevel;
  @Prop({ mutable: true }) quintupleCut: number = RunebladeSkills.QuintupleCut.minLevel;
  @Prop({ mutable: true }) bladeWhip: number = RunebladeSkills.BladeWhip.minLevel;
  @Prop({ mutable: true }) bladeExpert: number = RunebladeSkills.BladeExpert.minLevel;
  @Prop({ mutable: true }) phantasmSlash: number = RunebladeSkills.PhantasmSlash.minLevel;
  @Prop({ mutable: true }) runeTrigger: number = RunebladeSkills.RuneTrigger.minLevel;
  @Prop({ mutable: true }) dimensionBlade: number = RunebladeSkills.DimensionBlade.minLevel;
  @Prop({ mutable: true }) runeExpert: number = RunebladeSkills.RuneExpert.minLevel;
  @Prop({ mutable: true }) runeIgnition: number = RunebladeSkills.RuneIgnition.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  @ConstructibleStyle({ cacheKeyProperty: "extras" }) styles = RunebladeComponent.getStyles;

  private runebladeSkills: { [prop: string]: ISkillBase } = {};
  private rankOneSkills: { [prop: string]: ISkill } = {};
  private rankTwoSkills: { [prop: string]: IAwakenedSkill } = {};

  componentWillLoad() {
    Object.keys(RunebladeSkills).map((key: string) => {
      // create copies of each skill so we can toggle the extras for skill attunes
      this.updateSkill(key, { ...RunebladeSkills[key] });
    });

    processSkills(this, this.runebladeSkills, this.ignoreMax);
    this.updateSigil();
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, RunebladeSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, this.runebladeSkills, this.ignoreMax, skill);
    this.host.forceUpdate();

    if (skill.prop === this.sigil && level === 0) {
      this.changeSigil();
    } else { // else, to make sure we only emit one change event
      this.updateSigil();
      this.emitChangeEvent();
    }
  }

  @Watch("ignoreMax")
  ignoreMaxChanged(): void {
    processSkills(this, this.runebladeSkills, this.ignoreMax);
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, this.runebladeSkills, this.sigil && { sigil: this.sigil } || undefined));
  }

  render() {
    return ([
      <ms-chart msClass="runeblade" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
        { renderLevelControls(this, this.rankOneSkills, this.editable, this.extras, Rank.Basic, {
          onSkillclicked: (evt) => this.changeSigil(evt.detail),
        }) }
        { renderLevelControls(this, this.rankTwoSkills, this.editable, this.extras, Rank.Awakening, {
          onSkillclicked: (evt) => this.changeSigil(evt.detail),
        }) }
      </ms-chart>
    ]);
  }

  private changeSigil(skill?: ISkill) {
    if (!this.extras) return;

    let sigil: Sigil = "";

    if (skill) {
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

    if (!skill || this[skill.prop] > 0) {
      if (sigil === this.sigil) this.sigil = "";
      else this.sigil = sigil;

      this.updateSigil();
      this.emitChangeEvent();
    }
  }

  private updateSigil() {
    if (this.extras) {
      let sigilIdx = this.sigil === "flameSigil" ? 0
              : this.sigil === "frostSigil" ? 1
              : this.sigil === "stormSigil" ? 2
              : -1;

      Object.keys(this.runebladeSkills).forEach((key: string) => {
        let originalSkill: ISkillBase = RunebladeSkills[key];
        if (originalSkill.extras) {
          if (this.sigil) {
            this.updateSkill(key, {
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
            })
          } else {
            this.updateSkill(key, {
              ...originalSkill,
              extras: [{
                description: "Click on a sigil to show how this skill attunes."
              }]
            });
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

          this.updateSkill(key, {
            ...originalSkill,
            extras: [{
              description: description,
            }],
          });
        }
      });
    }
  }

  private updateSkill(key: string, skill: ISkillBase) {
    this.runebladeSkills[key] = skill;
    if (skill.rank === Rank.Basic) {
      this.rankOneSkills[key] = skill as ISkill;
    } else {
      this.rankTwoSkills[key] = skill as IAwakenedSkill;
    }
  }

  private static getStyles(): string {
    return `
      ms-runeblade[extras] ms-skill:before { background: url(${ getOptimizedAssetPath(`assets/skill-shield-selected.png`) }) }
      :host([extras]) ms-skill:before { background: url(${ getOptimizedAssetPath(`assets/skill-shield-selected.png`) }) }
    `;
  }
}
