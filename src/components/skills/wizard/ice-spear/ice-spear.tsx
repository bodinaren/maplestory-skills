import { Component, Prop } from "@stencil/core";
import { IceSpear } from "../../../../global/values/wizard";

@Component({
  tag: "ms-ice-spear",
  styleUrls: ["../../skills.scss", "ice-spear.scss"],
  shadow: true
})
export class IceSpearComponent {

  @Prop({ reflectToAttr: true }) level: number = IceSpear.minLevel;

  render() {
    return [
      <ms-icon name="ice-spear"></ms-icon>,
      <ms-skill-overlay skill={ IceSpear } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
