import { Component, Prop } from "@stencil/core";
import { LuckyStars } from "../../../../global/values/assassin";

@Component({
  tag: "ms-lucky-stars",
  styleUrls: ["../../skills.scss", "lucky-stars.scss"],
  shadow: true
})
export class LuckyStarsComponent {

  @Prop({ reflectToAttr: true }) level: number = LuckyStars.minLevel;

  render() {
    return [
      <ms-icon name="lucky-stars"></ms-icon>,
      <ms-skill-overlay skill={ LuckyStars } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
