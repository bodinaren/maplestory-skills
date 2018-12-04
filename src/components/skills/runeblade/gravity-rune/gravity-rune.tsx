import { Component, Prop } from "@stencil/core";
import { GravityRune } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-gravity-rune",
  styleUrls: ["../../skills.scss", "gravity-rune.scss"],
  shadow: true
})
export class GravityRuneComponent {

  @Prop({ reflectToAttr: true }) level: number = GravityRune.minLevel;

  render() {
    return [
      <ms-icon name="gravity-rune"></ms-icon>,
      <ms-skill-overlay skill={ GravityRune } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
