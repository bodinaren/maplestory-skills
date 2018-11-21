import { Component, Prop } from "@stencil/core";
import * as AssassinValues from "../../../global/values/assassin";

@Component({
  tag: "ms-assassin",
  styleUrls: ["../charts.scss", "assassin.scss"],
  assetsDir: "assets",
  shadow: true
})
export class AssassinComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop({ mutable: true }) darkCloak: number = AssassinValues.DarkCloakValues.minLevel;
  @Prop({ mutable: true }) dash: number = AssassinValues.DashValues.minLevel;
  @Prop({ mutable: true }) deathSentence: number = AssassinValues.DeathSentenceValues.minLevel;
  @Prop({ mutable: true }) fatalStrikes: number = AssassinValues.FatalStrikesValues.minLevel;
  @Prop({ mutable: true }) fragmentedStar: number = AssassinValues.FragmentedStarValues.minLevel;
  @Prop({ mutable: true }) luckyStars: number = AssassinValues.LuckyStarsValues.minLevel;
  @Prop({ mutable: true }) markOfDeath: number = AssassinValues.MarkOfDeathValues.minLevel;
  @Prop({ mutable: true }) mirrorImageDarkBlade: number = AssassinValues.MirrorImageDarkBladeValues.minLevel;
  @Prop({ mutable: true }) shadowArts: number = AssassinValues.ShadowArtsValues.minLevel;
  @Prop({ mutable: true }) shadowBurst: number = AssassinValues.ShadowBurstValues.minLevel;
  @Prop({ mutable: true }) shadowChaser: number = AssassinValues.ShadowChaserValues.minLevel;
  @Prop({ mutable: true }) shadowCutter: number = AssassinValues.ShadowCutterValues.minLevel;
  @Prop({ mutable: true }) shadowWeb: number = AssassinValues.ShadowWebValues.minLevel;
  @Prop({ mutable: true }) soulGrind: number = AssassinValues.SoulGrindValues.minLevel;
  @Prop({ mutable: true }) starChaser: number = AssassinValues.StarChaserValues.minLevel;
  @Prop({ mutable: true }) starFlurry: number = AssassinValues.StarFlurryValues.minLevel;
  @Prop({ mutable: true }) thrownWeaponMastery: number = AssassinValues.ThrownWeaponMasteryValues.minLevel;

  render() {
    return [
      <ms-footer></ms-footer>,
      <div class="chart assassin" style={{ backgroundImage: `url(${ this.publicPath }assets/assassin.jpg)` }}>
        <ms-dark-cloak level={ this.darkCloak }></ms-dark-cloak>
        <ms-dash level={ this.dash }></ms-dash>
        <ms-death-sentence level={ this.deathSentence }></ms-death-sentence>
        <ms-fatal-strikes level={ this.fatalStrikes }></ms-fatal-strikes>
        <ms-fragmented-star level={ this.fragmentedStar }></ms-fragmented-star>
        <ms-lucky-stars level={ this.luckyStars }></ms-lucky-stars>
        <ms-mark-of-death level={ this.markOfDeath }></ms-mark-of-death>
        <ms-mirror-image-dark-blade level={ this.mirrorImageDarkBlade }></ms-mirror-image-dark-blade>
        <ms-shadow-arts level={ this.shadowArts }></ms-shadow-arts>
        <ms-shadow-burst level={ this.shadowBurst }></ms-shadow-burst>
        <ms-shadow-chaser level={ this.shadowChaser }></ms-shadow-chaser>
        <ms-shadow-cutter level={ this.shadowCutter }></ms-shadow-cutter>
        <ms-shadow-web level={ this.shadowWeb }></ms-shadow-web>
        <ms-soul-grind level={ this.soulGrind }></ms-soul-grind>
        <ms-star-chaser level={ this.starChaser }></ms-star-chaser>
        <ms-star-flurry level={ this.starFlurry }></ms-star-flurry>
        <ms-thrown-weapon-mastery level={ this.thrownWeaponMastery }></ms-thrown-weapon-mastery>
      </div>
    ];
  }
}
