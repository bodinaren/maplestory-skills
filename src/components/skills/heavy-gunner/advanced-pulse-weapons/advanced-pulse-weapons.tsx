import { Component, Prop } from "@stencil/core";
import { AdvancedPulseWeapons } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-pulse-weapons",
  styleUrls: ["../../skills.scss", "advanced-pulse-weapons.scss"],
  shadow: true
})
export class AdvancedPulseWeaponsComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedPulseWeapons.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="advanced-pulse-weapons"></ms-icon>,
      <ms-skill-overlay skill={ AdvancedPulseWeapons } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
