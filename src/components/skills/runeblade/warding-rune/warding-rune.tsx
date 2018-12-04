import { Component, Prop } from "@stencil/core";
import { WardingRune } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-warding-rune",
  styleUrls: ["../../skills.scss", "warding-rune.scss"],
  shadow: true
})
export class WardingRuneComponent {

  @Prop({ reflectToAttr: true }) level: number = WardingRune.minLevel;

  render() {
    return [
      <ms-icon name="warding-rune"></ms-icon>,
      <ms-skill-overlay skill={ WardingRune } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
