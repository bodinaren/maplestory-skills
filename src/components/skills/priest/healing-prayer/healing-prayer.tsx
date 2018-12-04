import { Component, Prop } from "@stencil/core";
import { HealingPrayer } from "../../../../global/values/priest";

@Component({
  tag: "ms-healing-prayer",
  styleUrls: ["../../skills.scss", "healing-prayer.scss"],
  shadow: true
})
export class HealingPrayerComponent {

  @Prop({ reflectToAttr: true }) level: number = HealingPrayer.minLevel;

  render() {
    return [
      <ms-icon name="healing-prayer"></ms-icon>,
      <ms-skill-overlay skill={ HealingPrayer } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
