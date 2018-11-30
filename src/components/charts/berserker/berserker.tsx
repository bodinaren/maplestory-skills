import { Component, Prop, State } from "@stencil/core";
import { processSkills, renderLevelControls } from "../class-chart-helpers";
import * as BerserkerSkills from "../../../global/values/berserker";

@Component({
  tag: "ms-berserker",
  styleUrls: ["berserker.scss"],
  shadow: true
})
export class BerserkerComponent {

  @Prop() editable: boolean = false;

  @Prop({ mutable: true }) adrenalineRush: number = BerserkerSkills.AdrenalineRush.minLevel;
  @Prop({ mutable: true }) bloodPrice: number = BerserkerSkills.BloodPrice.minLevel;
  @Prop({ mutable: true }) bloodlust: number = BerserkerSkills.Bloodlust.minLevel;
  @Prop({ mutable: true }) darkAura: number = BerserkerSkills.DarkAura.minLevel;
  @Prop({ mutable: true }) darkBreaker: number = BerserkerSkills.DarkBreaker.minLevel;
  @Prop({ mutable: true }) darkMight: number = BerserkerSkills.DarkMight.minLevel;
  @Prop({ mutable: true }) deathSpin: number = BerserkerSkills.DeathSpin.minLevel;
  @Prop({ mutable: true }) deepWounds: number = BerserkerSkills.DeepWounds.minLevel;
  @Prop({ mutable: true }) earthquake: number = BerserkerSkills.Earthquake.minLevel;
  @Prop({ mutable: true }) greatswordMastery: number = BerserkerSkills.GreatswordMastery.minLevel;
  @Prop({ mutable: true }) groundBreaker: number = BerserkerSkills.GroundBreaker.minLevel;
  @Prop({ mutable: true }) inhumanEndurance: number = BerserkerSkills.InhumanEndurance.minLevel;
  @Prop({ mutable: true }) intimidation: number = BerserkerSkills.Intimidation.minLevel;
  @Prop({ mutable: true }) ragingSlash: number = BerserkerSkills.RagingSlash.minLevel;
  @Prop({ mutable: true }) voidSlash: number = BerserkerSkills.VoidSlash.minLevel;
  @Prop({ mutable: true }) warriorsInstinct: number = BerserkerSkills.WarriorsInstinct.minLevel;
  @Prop({ mutable: true }) xSlash: number = BerserkerSkills.XSlash.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  componentWillLoad() {
    processSkills(this, BerserkerSkills);
  }

  render() {
    return (
      <ms-chart msClass="berserker">
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.AdrenalineRush, this.editable,
          <ms-adrenaline-rush level={ this.adrenalineRush }></ms-adrenaline-rush>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.BloodPrice, this.editable,
          <ms-blood-price level={ this.bloodPrice }></ms-blood-price>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.Bloodlust, this.editable,
          <ms-bloodlust level={ this.bloodlust }></ms-bloodlust>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.DarkAura, this.editable,
          <ms-dark-aura level={ this.darkAura }></ms-dark-aura>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.DarkBreaker, this.editable,
          <ms-dark-breaker level={ this.darkBreaker }></ms-dark-breaker>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.DarkMight, this.editable,
          <ms-dark-might level={ this.darkMight }></ms-dark-might>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.DeathSpin, this.editable,
          <ms-death-spin level={ this.deathSpin }></ms-death-spin>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.DeepWounds, this.editable,
          <ms-deep-wounds level={ this.deepWounds }></ms-deep-wounds>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.Earthquake, this.editable,
          <ms-earthquake level={ this.earthquake }></ms-earthquake>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.GreatswordMastery, this.editable,
          <ms-greatsword-mastery level={ this.greatswordMastery }></ms-greatsword-mastery>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.GroundBreaker, this.editable,
          <ms-ground-breaker level={ this.groundBreaker }></ms-ground-breaker>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.InhumanEndurance, this.editable,
          <ms-inhuman-endurance level={ this.inhumanEndurance }></ms-inhuman-endurance>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.Intimidation, this.editable,
          <ms-intimidation level={ this.intimidation }></ms-intimidation>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.RagingSlash, this.editable,
          <ms-raging-slash level={ this.ragingSlash }></ms-raging-slash>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.VoidSlash, this.editable,
          <ms-void-slash level={ this.voidSlash }></ms-void-slash>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.WarriorsInstinct, this.editable,
          <ms-warriors-instinct level={ this.warriorsInstinct }></ms-warriors-instinct>
        )}
        { renderLevelControls(this, BerserkerSkills, BerserkerSkills.XSlash, this.editable,
          <ms-x-slash level={ this.xSlash }></ms-x-slash>
        )}
      </ms-chart>
    );
  }
}
