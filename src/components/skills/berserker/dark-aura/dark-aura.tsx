import { Component, Prop } from "@stencil/core";
import { DarkAura } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-aura",
  styleUrls: ["../../skills.scss", "dark-aura.scss"],
  shadow: true
})
export class DarkAuraComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkAura.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="dark-aura" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ DarkAura } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
