import { Component, Prop } from "@stencil/core";
import { FragmentedStar } from "../../../../global/values/assassin";

@Component({
  tag: "ms-fragmented-star",
  styleUrls: ["../../skills.scss", "fragmented-star.scss"],
  shadow: true
})
export class FragmentedStarComponent {

  @Prop({ reflectToAttr: true }) level: number = FragmentedStar.minLevel;

  render() {
    return [
      <ms-icon name="fragmented-star"></ms-icon>,
      <ms-skill-overlay skill={ FragmentedStar } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
