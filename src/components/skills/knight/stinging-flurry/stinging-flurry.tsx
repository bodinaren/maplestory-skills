import { Component, Prop } from "@stencil/core";
import { StingingFlurry } from "../../../../global/values/knight";

@Component({
  tag: "ms-stinging-flurry",
  styleUrls: ["../../skills.scss", "stinging-flurry.scss"],
  shadow: true
})
export class StingingFlurryComponent {

  @Prop({ reflectToAttr: true }) level: number = StingingFlurry.minLevel;

  render() {
    return [
      <ms-icon name="stinging-flurry"></ms-icon>,
      <ms-skill-overlay skill={ StingingFlurry } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
