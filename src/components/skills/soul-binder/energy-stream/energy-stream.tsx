import { Component, Prop } from "@stencil/core";
import { EnergyStreamValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-energy-stream",
  styleUrls: ["../../skills.scss", "energy-stream.scss"],
  shadow: true
})
export class EnergyStreamComponent {

  @Prop({ reflectToAttr: true }) level: number = EnergyStreamValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EnergyStreamValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ EnergyStreamValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="energy-stream"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="energy-stream"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ EnergyStreamValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ EnergyStreamValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
