import { Component, Prop } from "@stencil/core";
import { AdvancedMissiles } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-missiles",
  styleUrls: ["../../skills.scss", "advanced-missiles.scss"],
  shadow: true
})
export class AdvancedMissilesComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedMissiles.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="advanced-missiles"></ms-icon>,
      <ms-skill-overlay skill={ AdvancedMissiles } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
