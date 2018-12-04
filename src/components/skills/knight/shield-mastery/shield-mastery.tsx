import { Component, Prop } from "@stencil/core";
import { ShieldMastery } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-mastery",
  styleUrls: ["../../skills.scss", "shield-mastery.scss"],
  shadow: true
})
export class ShieldMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="shield-mastery"></ms-icon>,
      <ms-skill-overlay skill={ ShieldMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
