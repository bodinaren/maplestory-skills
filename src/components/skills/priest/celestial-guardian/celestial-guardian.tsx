import { Component, Prop } from "@stencil/core";
import { CelestialGuardian } from "../../../../global/values/priest";

@Component({
  tag: "ms-celestial-guardian",
  styleUrls: ["../../skills.scss", "celestial-guardian.scss"],
  shadow: true
})
export class CelestialGuardianComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialGuardian.minLevel;

  render() {
    return [
      <ms-icon name="celestial-guardian"></ms-icon>,
      <ms-skill-overlay skill={ CelestialGuardian } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
