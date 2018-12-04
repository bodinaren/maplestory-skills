import { Component, Prop } from "@stencil/core";
import { EagleClaw } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagle-claw",
  styleUrls: ["../../skills.scss", "eagle-claw.scss"],
  shadow: true
})
export class EagleClawComponent {

  @Prop({ reflectToAttr: true }) level: number = EagleClaw.minLevel;

  render() {
    return [
      <ms-icon name="eagle-claw"></ms-icon>,
      <ms-skill-overlay skill={ EagleClaw } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
