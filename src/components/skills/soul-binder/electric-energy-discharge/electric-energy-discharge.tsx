import { Component, Prop } from "@stencil/core";
import { ElectricEnergyDischargeValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-electric-energy-discharge",
  styleUrls: ["../../skills.scss", "electric-energy-discharge.scss"],
  shadow: true
})
export class ElectricEnergyDischargeComponent {

  @Prop({ reflectToAttr: true }) level: number = ElectricEnergyDischargeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ElectricEnergyDischargeValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ElectricEnergyDischargeValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="electric-energy-discharge"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="electric-energy-discharge"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ ElectricEnergyDischargeValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ ElectricEnergyDischargeValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
