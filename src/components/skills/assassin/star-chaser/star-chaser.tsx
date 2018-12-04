import { Component, Prop } from "@stencil/core";
import { StarChaser } from "../../../../global/values/assassin";

@Component({
  tag: "ms-star-chaser",
  styleUrls: ["../../skills.scss", "star-chaser.scss"],
  shadow: true
})
export class StarChaserComponent {

  @Prop({ reflectToAttr: true }) level: number = StarChaser.minLevel;

  render() {
    return [
      <ms-icon name="star-chaser"></ms-icon>,
      <ms-skill-overlay skill={ StarChaser } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
