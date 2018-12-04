import { Component, Prop } from "@stencil/core";
import { ShieldCharge } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-charge",
  styleUrls: ["../../skills.scss", "shield-charge.scss"],
  shadow: true
})
export class ShieldChargeComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldCharge.minLevel;

  render() {
    return [
      <ms-icon name="shield-charge"></ms-icon>,
      <ms-skill-overlay skill={ ShieldCharge } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
