import { Component, Prop } from "@stencil/core";
import { ScrewdriverShot } from "../../../../global/values/archer";

@Component({
  tag: "ms-screwdriver-shot",
  styleUrls: ["../../skills.scss", "screwdriver-shot.scss"],
  shadow: true
})
export class ScrewdriverShotComponent {

  @Prop({ reflectToAttr: true }) level: number = ScrewdriverShot.minLevel;

  render() {
    return [
      <ms-icon name="screwdriver-shot"></ms-icon>,
      <ms-skill-overlay skill={ ScrewdriverShot } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
