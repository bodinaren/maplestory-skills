import { Component, Prop } from "@stencil/core";
import { SurpriseAttack } from "../../../../global/values/thief";

@Component({
  tag: "ms-surprise-attack",
  styleUrls: ["../../skills.scss", "surprise-attack.scss"],
  shadow: true
})
export class SurpriseAttackComponent {

  @Prop({ reflectToAttr: true }) level: number = SurpriseAttack.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SurpriseAttack.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SurpriseAttack.levelRequirement[this.level] }+`,
      `Poison Edge [Level 6+]`,
      `Poison Vial [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="surprise-attack"></ms-icon>,
      <ms-skill-overlay heading={ SurpriseAttack.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger, One-handed Dagger"
                        requirements={ this.getRequirements() }
                        cooldown={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="surprise-attack"></ms-icon>
        <div slot="description">
          Stab <span>3</span> enemies up to <span>3</span> m in front of you,
          dealing <span>{ SurpriseAttack.values.damage[this.level] }%</span> damage.
          If a target is afflicted with Poison Edge or Poison Vial, they’ll take an
          additional <span>{ SurpriseAttack.values.additionalDamage[this.level] }%</span> poison damage for each,
          and the poison will be removed.
          When Cunning is active, this skill is empowered.
        </div>
      </ms-skill-overlay>
    ];
  }
}
