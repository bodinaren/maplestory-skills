import { Component, Prop } from "@stencil/core";
import { RocketLauncher } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-rocket-launcher",
  styleUrls: ["../../skills.scss", "rocket-launcher.scss"],
  shadow: true
})
export class RocketLauncherComponent {

  @Prop({ reflectToAttr: true }) level: number = RocketLauncher.minLevel;

  render() {
    return [
      <ms-icon name="rocket-launcher"></ms-icon>,
      <ms-skill-overlay skill={ RocketLauncher } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
