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
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="blood-price"></ms-icon>,
      <ms-skill-overlay heading="Blood Price"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="blood-price"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
