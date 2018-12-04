import { Component, Prop } from "@stencil/core";
import { BloodPrice } from "../../../../global/values/berserker";

@Component({
  tag: "ms-blood-price",
  styleUrls: ["../../skills.scss", "blood-price.scss"],
  shadow: true
})
export class BloodPriceComponent {

  @Prop({ reflectToAttr: true }) level: number = BloodPrice.minLevel;

  render() {
    return [
      <ms-icon name="blood-price"></ms-icon>,
      <ms-skill-overlay skill={ BloodPrice } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
