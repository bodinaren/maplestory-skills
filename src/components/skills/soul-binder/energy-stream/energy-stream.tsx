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
      `Split Barrier [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="energy-stream"></ms-icon>,
      <ms-skill-overlay heading="Energy Stream"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 5 }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="energy-stream"></ms-icon>
        <div slot="description">
          Use the power of animus to cast magic within a <span>7.5</span> m radius,
          exhausting the vitality of <span>8</span> enemies within range,
          dealing <span>{ EnergyStreamValues.damage[this.level] }%</span> damage,
          and reducing both defense and movement speed
          by <span>{ EnergyStreamValues.reduction[this.level] }%</span> for <span>10</span> sec.
          The enhancement level changes and activates depending on the number of Mantra Cores.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
