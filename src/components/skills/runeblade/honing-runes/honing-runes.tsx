import { Component, Prop } from "@stencil/core";
import { HoningRunes } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-honing-runes",
  styleUrls: ["../../skills.scss", "honing-runes.scss"],
  shadow: true
})
export class HoningRunesComponent {

  @Prop({ reflectToAttr: true }) level: number = HoningRunes.minLevel;

  render() {
    return [
      <ms-icon name="honing-runes"></ms-icon>,
      <ms-skill-overlay skill={ HoningRunes } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
