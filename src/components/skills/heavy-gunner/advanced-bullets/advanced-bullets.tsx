import { Component, Prop } from "@stencil/core";
import { AdvancedBullets } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-bullets",
  styleUrls: ["../../skills.scss", "advanced-bullets.scss"],
  shadow: true
})
export class AdvancedBulletsComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedBullets.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="advanced-bullets"></ms-icon>,
      <ms-skill-overlay skill={ AdvancedBullets } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
