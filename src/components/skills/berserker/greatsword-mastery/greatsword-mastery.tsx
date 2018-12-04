import { Component, Prop } from "@stencil/core";
import { GreatswordMastery } from "../../../../global/values/berserker";

@Component({
  tag: "ms-greatsword-mastery",
  styleUrls: ["../../skills.scss", "greatsword-mastery.scss"],
  shadow: true
})
export class GreatswordMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = GreatswordMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="greatsword-mastery"></ms-icon>,
      <ms-skill-overlay skill={ GreatswordMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
