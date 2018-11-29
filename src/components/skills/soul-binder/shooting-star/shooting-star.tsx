import { Component, Prop } from "@stencil/core";
import { ShootingStarValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-shooting-star",
  styleUrls: ["../../skills.scss", "shooting-star.scss"],
  shadow: true
})
export class ShootingStarComponent {

  @Prop({ reflectToAttr: true }) level: number = ShootingStarValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShootingStarValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShootingStarValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shooting-star"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shooting-star"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ ShootingStarValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ ShootingStarValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
