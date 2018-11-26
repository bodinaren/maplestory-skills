import { Component, Prop } from "@stencil/core";
import * as KnightValues from "../../../global/values/knight";

@Component({
  tag: "ms-knight",
  styleUrls: ["knight.scss"],
  shadow: true
})
export class KnightComponent {

  @Prop({ mutable: true }) bulwark: number = KnightValues.BulwarkValues.minLevel;
  @Prop({ mutable: true }) crossCut: number = KnightValues.CrossCutValues.minLevel;
  @Prop({ mutable: true }) defenderOfTheFaith: number = KnightValues.DefenderOfTheFaithValues.minLevel;
  @Prop({ mutable: true }) divineStrike: number = KnightValues.DivineStrikeValues.minLevel;
  @Prop({ mutable: true }) drillThrust: number = KnightValues.DrillThrustValues.minLevel;
  @Prop({ mutable: true }) ironDefense: number = KnightValues.IronDefenseValues.minLevel;
  @Prop({ mutable: true }) ironShield: number = KnightValues.IronShieldValues.minLevel;
  @Prop({ mutable: true }) longswordMastery: number = KnightValues.LongswordMasteryValues.minLevel;
  @Prop({ mutable: true }) shieldBooster: number = KnightValues.ShieldBoosterValues.minLevel;
  @Prop({ mutable: true }) shieldCharge: number = KnightValues.ShieldChargeValues.minLevel;
  @Prop({ mutable: true }) shieldMastery: number = KnightValues.ShieldMasteryValues.minLevel;
  @Prop({ mutable: true }) shieldToss: number = KnightValues.ShieldTossValues.minLevel;
  @Prop({ mutable: true }) shieldWall: number = KnightValues.ShieldWallValues.minLevel;
  @Prop({ mutable: true }) stingingFlurry: number = KnightValues.StingingFlurryValues.minLevel;
  @Prop({ mutable: true }) tornadoSlash: number = KnightValues.TornadoSlashValues.minLevel;
  @Prop({ mutable: true }) typhoonSlash: number = KnightValues.TyphoonSlashValues.minLevel;
  @Prop({ mutable: true }) warhorn: number = KnightValues.WarhornValues.minLevel;

  render() {
    return (
      <ms-chart msClass="knight">
        <ms-bulwark level={ this.bulwark }></ms-bulwark>
        <ms-cross-cut level={ this.crossCut }></ms-cross-cut>
        <ms-defender-of-the-faith level={ this.defenderOfTheFaith }></ms-defender-of-the-faith>
        <ms-divine-strike level={ this.divineStrike }></ms-divine-strike>
        <ms-drill-thrust level={ this.drillThrust }></ms-drill-thrust>
        <ms-iron-defense level={ this.ironDefense }></ms-iron-defense>
        <ms-iron-shield level={ this.ironShield }></ms-iron-shield>
        <ms-longsword-mastery level={ this.longswordMastery }></ms-longsword-mastery>
        <ms-shield-booster level={ this.shieldBooster }></ms-shield-booster>
        <ms-shield-charge level={ this.shieldCharge }></ms-shield-charge>
        <ms-shield-mastery level={ this.shieldMastery }></ms-shield-mastery>
        <ms-shield-toss level={ this.shieldToss }></ms-shield-toss>
        <ms-shield-wall level={ this.shieldWall }></ms-shield-wall>
        <ms-stinging-flurry level={ this.stingingFlurry }></ms-stinging-flurry>
        <ms-tornado-slash level={ this.tornadoSlash }></ms-tornado-slash>
        <ms-typhoon-slash level={ this.typhoonSlash }></ms-typhoon-slash>
        <ms-warhorn level={ this.warhorn }></ms-warhorn>
      </ms-chart>
    );
  }
}
