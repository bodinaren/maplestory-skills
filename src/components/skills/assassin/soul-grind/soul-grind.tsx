import { Component, Prop } from "@stencil/core";
import { SoulGrind } from "../../../../global/values/assassin";

@Component({
  tag: "ms-soul-grind",
  styleUrls: ["../../skills.scss", "soul-grind.scss"],
  shadow: true
})
export class SoulGrindComponent {

  @Prop({ reflectToAttr: true }) level: number = SoulGrind.minLevel;

  render() {
    return [
      <ms-icon name="soul-grind"></ms-icon>,
      <ms-skill-overlay skill={ SoulGrind } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
