import { Component, Prop } from "@stencil/core";
import { BloodPrice } from "../../../../global/values/berserker";

@Component({
  tag: "ms-blood-price",
  styleUrls: ["../../skills.scss", "blood-price.scss"],
  shadow: true
})
export class BloodPriceComponent {

  @Prop({ reflectToAttr: true }) level: number = BloodPrice.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BloodPrice.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BloodPrice.levelRequirement[this.level] }+`,
      `Bloodlust [Level 6+]`,
      `Adrenaline Rush [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="blood-price"></ms-icon>,
      <ms-skill-overlay heading={ BloodPrice.name }
                        element="Dark"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="blood-price"></ms-icon>
        <div slot="description">
          Darkness fuels you, increasing your damage
          by <span>{ BloodPrice.values.damage[this.level] }%</span> but
          depleting your health by <span>1%</span> on hit for <span>30</span> sec.
          This effect will stop consuming health when you get to <span>25%</span> health.
        </div>
      </ms-skill-overlay>
    ];
  }
}
