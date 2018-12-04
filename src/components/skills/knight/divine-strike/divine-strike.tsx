import { Component, Prop } from "@stencil/core";
import { DivineStrike } from "../../../../global/values/knight";

@Component({
  tag: "ms-divine-strike",
  styleUrls: ["../../skills.scss", "divine-strike.scss"],
  shadow: true
})
export class DivineStrikeComponent {

  @Prop({ reflectToAttr: true }) level: number = DivineStrike.minLevel;

  render() {
    return [
      <ms-icon name="divine-strike"></ms-icon>,
      <ms-skill-overlay skill={ DivineStrike } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
