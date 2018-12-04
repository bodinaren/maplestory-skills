import { Component, Prop } from "@stencil/core";
import { DefenderOfTheFaith } from "../../../../global/values/knight";

@Component({
  tag: "ms-defender-of-the-faith",
  styleUrls: ["../../skills.scss", "defender-of-the-faith.scss"],
  shadow: true
})
export class DefenderOfTheFaithComponent {

  @Prop({ reflectToAttr: true }) level: number = DefenderOfTheFaith.minLevel;

  render() {
    return [
      <ms-icon name="defender-of-the-faith"></ms-icon>,
      <ms-skill-overlay skill={ DefenderOfTheFaith } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
