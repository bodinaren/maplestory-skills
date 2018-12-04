import { Component, Prop } from "@stencil/core";
import { DarkCloak } from "../../../../global/values/assassin";

@Component({
  tag: "ms-dark-cloak",
  styleUrls: ["../../skills.scss", "dark-cloak.scss"],
  shadow: true
})
export class DarkCloakComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkCloak.minLevel;

  render() {
    return [
      <ms-icon name="dark-cloak"></ms-icon>,
      <ms-skill-overlay skill={ DarkCloak } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
