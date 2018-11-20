import { Component, Prop } from "@stencil/core";
import { BloodPriceValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-blood-price",
  styleUrls: ["../../skills.scss", "blood-price.scss"],
  shadow: true
})
export class BloodPriceComponent {

  @Prop({ reflectToAttr: true }) level: number = BloodPriceValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BloodPriceValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BloodPriceValues.levelRequirement[this.level] }+`,
      `Bloodlust [Level 6+]`,
      `Adrenaline Rush [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="blood-price"></ms-icon>,
      <ms-skill-overlay heading="Blood Price"
                        element="Dark"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="blood-price"></ms-icon>
        <div slot="description">
          Darkness fuels you, increasing your damage
          by <span>{ BloodPriceValues.damage[this.level] }%</span> but
          depleting your health by <span>1%</span> on hit for <span>30</span> sec.
          This effect will stop consuming health when you get to <span>25%</span> health.
        </div>
      </ms-skill-overlay>
    ];
  }
}
