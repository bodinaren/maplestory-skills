import { Component, Prop } from "@stencil/core";
import { StarFlurry } from "../../../../global/values/assassin";

@Component({
  tag: "ms-star-flurry",
  styleUrls: ["../../skills.scss", "star-flurry.scss"],
  shadow: true
})
export class StarFlurryComponent {

  @Prop({ reflectToAttr: true }) level: number = StarFlurry.minLevel;

  render() {
    return [
      <ms-icon name="star-flurry"></ms-icon>,
      <ms-skill-overlay skill={ StarFlurry } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
