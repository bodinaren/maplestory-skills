import { Component, Prop } from "@stencil/core";
import { Flurry } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-flurry",
  styleUrls: ["../../skills.scss", "flurry.scss"],
  shadow: true
})
export class FlurryComponent {

  @Prop({ reflectToAttr: true }) level: number = Flurry.minLevel;

  render() {
    return [
      <ms-icon name="flurry"></ms-icon>,
      <ms-skill-overlay skill={ Flurry } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
