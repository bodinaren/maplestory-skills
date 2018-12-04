import { Component, Prop } from "@stencil/core";
import { CelestialBlessings } from "../../../../global/values/priest";

@Component({
  tag: "ms-celestial-blessings",
  styleUrls: ["../../skills.scss", "celestial-blessings.scss"],
  shadow: true
})
export class CelestialBlessingsComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialBlessings.minLevel;

  render() {
    return [
      <ms-icon name="celestial-blessings"></ms-icon>,
      <ms-skill-overlay skill={ CelestialBlessings } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
