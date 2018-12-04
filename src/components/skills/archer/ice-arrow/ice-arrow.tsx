import { Component, Prop } from "@stencil/core";
import { IceArrow } from "../../../../global/values/archer";

@Component({
  tag: "ms-ice-arrow",
  styleUrls: ["../../skills.scss", "ice-arrow.scss"],
  shadow: true
})
export class IceArrowComponent {

  @Prop({ reflectToAttr: true }) level: number = IceArrow.minLevel;

  render() {
    return [
      <ms-icon name="ice-arrow"></ms-icon>,
      <ms-skill-overlay skill={ IceArrow } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
