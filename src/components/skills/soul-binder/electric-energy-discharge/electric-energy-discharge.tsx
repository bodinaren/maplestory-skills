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
      `Cyclone Bomber [Level 6+]`,
      `Energy Stream [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="electric-energy-discharge"></ms-icon>,
      <ms-skill-overlay heading="Electric Energy Discharge"
                        level={ this.level }
                        type="Long Range / Magic"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="electric-energy-discharge"></ms-icon>
        <div slot="description">
          Use the power of animus to cast magic within a <span>7.5</span> m radius,
          exhausting the vitality of <span>8</span> enemies within range,
          dealing <span>{ ElectricEnergyDischargeValues.damage[this.level] }%</span> damage,
          and reducing both defense and movement speed
          by <span>{ ElectricEnergyDischargeValues.reduction[this.level] }%</span> for <span>10</span> sec.
          The enhancement level changes and activates depending on the number of Mantra Cores.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
