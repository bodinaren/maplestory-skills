import { Component, Prop } from "@stencil/core";
import * as RunebladeValues from "../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade",
  styleUrls: ["../charts.scss", "runeblade.scss"],
  assetsDir: "assets",
  shadow: true
})
export class RunebladeComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop({ mutable: true }) bladeChasm: number = RunebladeValues.BladeChasmValues.minLevel;
  @Prop({ mutable: true }) bladeMastery: number = RunebladeValues.BladeMasteryValues.minLevel;
  @Prop({ mutable: true }) blink: number = RunebladeValues.BlinkValues.minLevel;
  @Prop({ mutable: true }) elementalPotency: number = RunebladeValues.ElementalPotencyValues.minLevel;
  @Prop({ mutable: true }) echoingBlade: number = RunebladeValues.EchoingBladeValues.minLevel;
  @Prop({ mutable: true }) flameSigil: number = RunebladeValues.FlameSigilValues.minLevel;
  @Prop({ mutable: true }) flurry: number = RunebladeValues.FlurryValues.minLevel;
  @Prop({ mutable: true }) frostSigil: number = RunebladeValues.FrostSigilValues.minLevel;
  @Prop({ mutable: true }) gravityRune: number = RunebladeValues.GravityRuneValues.minLevel;
  @Prop({ mutable: true }) honingRunes: number = RunebladeValues.HoningRunesValues.minLevel;
  @Prop({ mutable: true }) illusoryBlades: number = RunebladeValues.IllusoryBladesValues.minLevel;
  @Prop({ mutable: true }) impact: number = RunebladeValues.ImpactValues.minLevel;
  @Prop({ mutable: true }) runeBalance: number = RunebladeValues.RuneBalanceValues.minLevel;
  @Prop({ mutable: true }) runeFocus: number = RunebladeValues.RuneFocusValues.minLevel;
  @Prop({ mutable: true }) stormSigil: number = RunebladeValues.StormSigilValues.minLevel;
  @Prop({ mutable: true }) wardingRune: number = RunebladeValues.WardingRuneValues.minLevel;
  @Prop({ mutable: true }) whirlingBlades: number = RunebladeValues.WhirlingBladesValues.minLevel;

  render() {
    return (
      <div class="chart runeblade" style={{ backgroundImage: `url(${ this.publicPath }assets/runeblade.jpg)` }}>
        <ms-blade-chasm level={ this.bladeChasm }></ms-blade-chasm>
        <ms-blade-mastery level={ this.bladeMastery }></ms-blade-mastery>
        <ms-blink level={ this.blink }></ms-blink>
        <ms-elemental-potency level={ this.elementalPotency }></ms-elemental-potency>
        <ms-echoing-blade level={ this.echoingBlade }></ms-echoing-blade>
        <ms-flame-sigil level={ this.flameSigil }></ms-flame-sigil>
        <ms-flurry level={ this.flurry }></ms-flurry>
        <ms-frost-sigil level={ this.frostSigil }></ms-frost-sigil>
        <ms-gravity-rune level={ this.gravityRune }></ms-gravity-rune>
        <ms-honing-runes level={ this.honingRunes }></ms-honing-runes>
        <ms-illusory-blades level={ this.illusoryBlades }></ms-illusory-blades>
        <ms-impact level={ this.impact }></ms-impact>
        <ms-rune-balance level={ this.runeBalance }></ms-rune-balance>
        <ms-rune-focus level={ this.runeFocus }></ms-rune-focus>
        <ms-storm-sigil level={ this.stormSigil }></ms-storm-sigil>
        <ms-warding-rune level={ this.wardingRune }></ms-warding-rune>
        <ms-whirling-blades level={ this.whirlingBlades }></ms-whirling-blades>
      </div>
    );
  }
}
