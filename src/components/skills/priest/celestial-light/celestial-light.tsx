import { Component, Prop } from "@stencil/core";
import { CelestialLight } from "../../../../global/values/priest";

@Component({
  tag: "ms-celestial-light",
  styleUrls: ["../../skills.scss", "celestial-light.scss"],
  shadow: true
})
export class CelestialLightComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialLight.minLevel;

  render() {
    return [
      <ms-icon name="celestial-light"></ms-icon>,
      <ms-skill-overlay skill={ CelestialLight } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
