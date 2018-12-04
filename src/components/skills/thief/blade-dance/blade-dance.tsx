import { Component, Prop } from "@stencil/core";
import { BladeDance } from "../../../../global/values/thief";

@Component({
  tag: "ms-blade-dance",
  styleUrls: ["../../skills.scss", "blade-dance.scss"],
  shadow: true
})
export class BladeDanceComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeDance.minLevel;

  render() {
    return [
      <ms-icon name="blade-dance"></ms-icon>,
      <ms-skill-overlay skill={ BladeDance } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
