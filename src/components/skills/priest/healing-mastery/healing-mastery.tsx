import { Component, Prop } from "@stencil/core";
import { HealingMastery } from "../../../../global/values/priest";

@Component({
  tag: "ms-healing-mastery",
  styleUrls: ["../../skills.scss", "healing-mastery.scss"],
  shadow: true
})
export class HealingMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = HealingMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="healing-mastery"></ms-icon>,
      <ms-skill-overlay skill={ HealingMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
