import { Component, Prop, State } from "@stencil/core";
import { processSkills, renderLevelControls } from "../class-chart-helpers";
import * as RunebladeSkills from "../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade",
  styleUrls: ["runeblade.scss"],
  shadow: true
})
export class RunebladeComponent {

  @Prop() editable: boolean = false;

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

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  componentWillLoad() {
    processSkills(this, RunebladeSkills);
  }

  render() {
    return (
      <ms-chart msClass="runeblade">
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.BladeChasm, this.editable,
          <ms-blade-chasm level={ this.bladeChasm }></ms-blade-chasm>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.BladeMastery, this.editable,
          <ms-blade-mastery level={ this.bladeMastery }></ms-blade-mastery>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.Blink, this.editable,
          <ms-blink level={ this.blink }></ms-blink>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.ElementalPotency, this.editable,
          <ms-elemental-potency level={ this.elementalPotency }></ms-elemental-potency>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.EchoingBlade, this.editable,
          <ms-echoing-blade level={ this.echoingBlade }></ms-echoing-blade>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.FlameSigil, this.editable,
          <ms-flame-sigil level={ this.flameSigil }></ms-flame-sigil>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.Flurry, this.editable,
          <ms-flurry level={ this.flurry }></ms-flurry>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.FrostSigil, this.editable,
          <ms-frost-sigil level={ this.frostSigil }></ms-frost-sigil>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.GravityRune, this.editable,
          <ms-gravity-rune level={ this.gravityRune }></ms-gravity-rune>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.HoningRunes, this.editable,
          <ms-honing-runes level={ this.honingRunes }></ms-honing-runes>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.IllusoryBlades, this.editable,
          <ms-illusory-blades level={ this.illusoryBlades }></ms-illusory-blades>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.Impact, this.editable,
          <ms-impact level={ this.impact }></ms-impact>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.RuneBalance, this.editable,
          <ms-rune-balance level={ this.runeBalance }></ms-rune-balance>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.RuneFocus, this.editable,
          <ms-rune-focus level={ this.runeFocus }></ms-rune-focus>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.StormSigil, this.editable,
          <ms-storm-sigil level={ this.stormSigil }></ms-storm-sigil>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.WardingRune, this.editable,
          <ms-warding-rune level={ this.wardingRune }></ms-warding-rune>
        )}
        { renderLevelControls(this, RunebladeSkills, RunebladeSkills.WhirlingBlades, this.editable,
          <ms-whirling-blades level={ this.whirlingBlades }></ms-whirling-blades>
        )}
      </ms-chart>
    );
  }
}
