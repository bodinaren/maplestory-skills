import { Component, Prop } from "@stencil/core";
import { ExpansionBallValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-expansion-ball",
  styleUrls: ["../../skills.scss", "expansion-ball.scss"],
  shadow: true
})
export class ExpansionBallComponent {

  @Prop({ reflectToAttr: true }) level: number = ExpansionBallValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ExpansionBallValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ExpansionBallValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="expansion-ball"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="expansion-ball"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ ExpansionBallValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ ExpansionBallValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
