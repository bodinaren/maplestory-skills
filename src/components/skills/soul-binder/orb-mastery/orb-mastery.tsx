import { Component, Prop } from "@stencil/core";
import { OrbMasteryValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-orb-mastery",
  styleUrls: ["../../skills.scss", "orb-mastery.scss"],
  shadow: true
})
export class OrbMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = OrbMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = OrbMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ OrbMasteryValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="orb-mastery"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="orb-mastery"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ OrbMasteryValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ OrbMasteryValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
