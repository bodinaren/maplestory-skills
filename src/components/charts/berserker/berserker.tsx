import { Component, Prop } from "@stencil/core";
import * as BerserkerValues from "../../../global/values/berserker";

@Component({
  tag: "ms-berserker",
  styleUrls: ["../charts.scss", "berserker.scss"],
  assetsDir: "assets",
  shadow: true
})
export class BerserkerComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop({ mutable: true }) adrenalineRush: number = BerserkerValues.AdrenalineRushValues.minLevel;
  @Prop({ mutable: true }) bloodPrice: number = BerserkerValues.BloodPriceValues.minLevel;
  @Prop({ mutable: true }) bloodlust: number = BerserkerValues.BloodlustValues.minLevel;
  @Prop({ mutable: true }) darkAura: number = BerserkerValues.DarkAuraValues.minLevel;
  @Prop({ mutable: true }) darkBreaker: number = BerserkerValues.DarkBreakerValues.minLevel;
  @Prop({ mutable: true }) darkMight: number = BerserkerValues.DarkMightValues.minLevel;
  @Prop({ mutable: true }) deathSpin: number = BerserkerValues.DeathSpinValues.minLevel;
  @Prop({ mutable: true }) deepWounds: number = BerserkerValues.DeepWoundsValues.minLevel;
  @Prop({ mutable: true }) earthquake: number = BerserkerValues.EarthquakeValues.minLevel;
  @Prop({ mutable: true }) greatswordMastery: number = BerserkerValues.GreatswordMasteryValues.minLevel;
  @Prop({ mutable: true }) groundBreaker: number = BerserkerValues.GroundBreakerValues.minLevel;
  @Prop({ mutable: true }) inhumanEndurance: number = BerserkerValues.InhumanEnduranceValues.minLevel;
  @Prop({ mutable: true }) intimidation: number = BerserkerValues.IntimidationValues.minLevel;
  @Prop({ mutable: true }) ragingSlash: number = BerserkerValues.RagingSlashValues.minLevel;
  @Prop({ mutable: true }) voidSlash: number = BerserkerValues.VoidSlashValues.minLevel;
  @Prop({ mutable: true }) warriorsInstinct: number = BerserkerValues.WarriorsInstinctValues.minLevel;
  @Prop({ mutable: true }) xSlash: number = BerserkerValues.XSlashValues.minLevel;

  render() {
    return [
      <div class="chart archer" style={{ backgroundImage: `url(${this.publicPath}assets/berserker.jpg)` }}>
        <ms-adrenaline-rush level={ this.adrenalineRush }></ms-adrenaline-rush>
        <ms-blood-price level={ this.bloodPrice }></ms-blood-price>
        <ms-bloodlust level={ this.bloodlust }></ms-bloodlust>
        <ms-dark-aura level={ this.darkAura }></ms-dark-aura>
        <ms-dark-breaker level={ this.darkBreaker }></ms-dark-breaker>
        <ms-dark-might level={ this.darkMight }></ms-dark-might>
        <ms-death-spin level={ this.deathSpin }></ms-death-spin>
        <ms-deep-wounds level={ this.deepWounds }></ms-deep-wounds>
        <ms-earthquake level={ this.earthquake }></ms-earthquake>
        <ms-greatsword-mastery level={ this.greatswordMastery }></ms-greatsword-mastery>
        <ms-ground-breaker level={ this.groundBreaker }></ms-ground-breaker>
        <ms-inhuman-endurance level={ this.inhumanEndurance }></ms-inhuman-endurance>
        <ms-intimidation level={ this.intimidation }></ms-intimidation>
        <ms-raging-slash level={ this.ragingSlash }></ms-raging-slash>
        <ms-void-slash level={ this.voidSlash }></ms-void-slash>
        <ms-warriors-instinct level={ this.warriorsInstinct }></ms-warriors-instinct>
        <ms-x-slash level={ this.xSlash }></ms-x-slash>
      </div>,
      <ms-footer></ms-footer>
    ];
  }
}
