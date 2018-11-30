import { Component, Prop, State } from "@stencil/core";
import { processSkills, renderLevelControls } from "../class-chart-helpers";
import * as AssassinSkills from "../../../global/values/assassin";

@Component({
  tag: "ms-assassin",
  styleUrls: ["assassin.scss"],
  shadow: true
})
export class AssassinComponent {

  @Prop() editable: boolean = false;

  @Prop({ mutable: true }) darkCloak: number = AssassinSkills.DarkCloak.minLevel;
  @Prop({ mutable: true }) dash: number = AssassinSkills.Dash.minLevel;
  @Prop({ mutable: true }) deathSentence: number = AssassinSkills.DeathSentence.minLevel;
  @Prop({ mutable: true }) fatalStrikes: number = AssassinSkills.FatalStrikes.minLevel;
  @Prop({ mutable: true }) fragmentedStar: number = AssassinSkills.FragmentedStar.minLevel;
  @Prop({ mutable: true }) luckyStars: number = AssassinSkills.LuckyStars.minLevel;
  @Prop({ mutable: true }) markOfDeath: number = AssassinSkills.MarkOfDeath.minLevel;
  @Prop({ mutable: true }) mirrorImageDarkBlade: number = AssassinSkills.MirrorImageDarkBlade.minLevel;
  @Prop({ mutable: true }) shadowArts: number = AssassinSkills.ShadowArts.minLevel;
  @Prop({ mutable: true }) shadowBurst: number = AssassinSkills.ShadowBurst.minLevel;
  @Prop({ mutable: true }) shadowChaser: number = AssassinSkills.ShadowChaser.minLevel;
  @Prop({ mutable: true }) shadowCutter: number = AssassinSkills.ShadowCutter.minLevel;
  @Prop({ mutable: true }) shadowWeb: number = AssassinSkills.ShadowWeb.minLevel;
  @Prop({ mutable: true }) soulGrind: number = AssassinSkills.SoulGrind.minLevel;
  @Prop({ mutable: true }) starChaser: number = AssassinSkills.StarChaser.minLevel;
  @Prop({ mutable: true }) starFlurry: number = AssassinSkills.StarFlurry.minLevel;
  @Prop({ mutable: true }) thrownWeaponMastery: number = AssassinSkills.ThrownWeaponMastery.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  componentWillLoad() {
    processSkills(this, AssassinSkills);
  }

  render() {
    return (
      <ms-chart msClass="assassin">
        { renderLevelControls(this, AssassinSkills, AssassinSkills.DarkCloak, this.editable,
          <ms-dark-cloak level={ this.darkCloak }></ms-dark-cloak>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.Dash, this.editable,
          <ms-dash level={ this.dash }></ms-dash>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.DeathSentence, this.editable,
          <ms-death-sentence level={ this.deathSentence }></ms-death-sentence>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.FatalStrikes, this.editable,
          <ms-fatal-strikes level={ this.fatalStrikes }></ms-fatal-strikes>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.FragmentedStar, this.editable,
          <ms-fragmented-star level={ this.fragmentedStar }></ms-fragmented-star>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.LuckyStars, this.editable,
          <ms-lucky-stars level={ this.luckyStars }></ms-lucky-stars>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.MarkOfDeath, this.editable,
          <ms-mark-of-death level={ this.markOfDeath }></ms-mark-of-death>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.MirrorImageDarkBlade, this.editable,
          <ms-mirror-image-dark-blade level={ this.mirrorImageDarkBlade }></ms-mirror-image-dark-blade>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.ShadowArts, this.editable,
          <ms-shadow-arts level={ this.shadowArts }></ms-shadow-arts>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.ShadowBurst, this.editable,
          <ms-shadow-burst level={ this.shadowBurst }></ms-shadow-burst>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.ShadowChaser, this.editable,
          <ms-shadow-chaser level={ this.shadowChaser }></ms-shadow-chaser>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.ShadowCutter, this.editable,
          <ms-shadow-cutter level={ this.shadowCutter }></ms-shadow-cutter>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.ShadowWeb, this.editable,
          <ms-shadow-web level={ this.shadowWeb }></ms-shadow-web>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.SoulGrind, this.editable,
          <ms-soul-grind level={ this.soulGrind }></ms-soul-grind>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.StarChaser, this.editable,
          <ms-star-chaser level={ this.starChaser }></ms-star-chaser>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.StarFlurry, this.editable,
          <ms-star-flurry level={ this.starFlurry }></ms-star-flurry>
        )}
        { renderLevelControls(this, AssassinSkills, AssassinSkills.ThrownWeaponMastery, this.editable,
          <ms-thrown-weapon-mastery level={ this.thrownWeaponMastery }></ms-thrown-weapon-mastery>
        )}
      </ms-chart>
    );
  }
}
