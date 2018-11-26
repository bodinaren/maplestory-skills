import { Component, Prop } from "@stencil/core";
import { SurpriseAttackValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-surprise-attack",
  styleUrls: ["../../skills.scss", "surprise-attack.scss"],
  shadow: true
})
export class SurpriseAttackComponent {

  @Prop({ reflectToAttr: true }) level: number = SurpriseAttackValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SurpriseAttackValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SurpriseAttackValues.levelRequirement[this.level] }+`,
      `Poison Edge [Level 6+]`,
      `Poison Vial [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="surprise-attack"></ms-icon>,
      <ms-skill-overlay heading="Surprise Attack"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger, One-handed Dagger"
                        requirements={ this.getRequirements() }
                        cooldown={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="surprise-attack"></ms-icon>
        <div slot="description">
          Stab <span>3</span> enemies up to <span>3</span> m in front of you,
          dealing <span>{ SurpriseAttackValues.damage[this.level] }%</span> damage.
          If a target is afflicted with Poison Edge or Poison Vial, they’ll take an
          additional <span>{ SurpriseAttackValues.additionalDamage[this.level] }%</span> poison damage for each,
          and the poison will be removed.
          When Cunning is active, this skill is empowered.
        </div>
      </ms-skill-overlay>
    ];
  }
}
