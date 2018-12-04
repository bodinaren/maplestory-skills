import { Component, Prop } from "@stencil/core";
import { BowSwing } from "../../../../global/values/archer";

@Component({
  tag: "ms-bow-swing",
  styleUrls: ["../../skills.scss", "bow-swing.scss"],
  shadow: true
})
export class BowSwingComponent {

  @Prop({ reflectToAttr: true }) level: number = BowSwing.minLevel;

  render() {
    return [
      <ms-icon name="bow-swing"></ms-icon>,
      <ms-skill-overlay skill={ BowSwing } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
