import { Component, Prop } from "@stencil/core";
import { RapidShot } from "../../../../global/values/archer";

@Component({
  tag: "ms-rapid-shot",
  styleUrls: ["../../skills.scss", "rapid-shot.scss"],
  shadow: true
})
export class RapidShotComponent {

  @Prop({ reflectToAttr: true }) level: number = RapidShot.minLevel;

  render() {
    return [
      <ms-icon name="rapid-shot"></ms-icon>,
      <ms-skill-overlay skill={ RapidShot } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
