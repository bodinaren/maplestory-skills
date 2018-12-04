import { Component, Prop } from "@stencil/core";
import { SmitingAura } from "../../../../global/values/priest";

@Component({
  tag: "ms-smiting-aura",
  styleUrls: ["../../skills.scss", "smiting-aura.scss"],
  shadow: true
})
export class SmitingAuraComponent {

  @Prop({ reflectToAttr: true }) level: number = SmitingAura.minLevel;

  render() {
    return [
      <ms-icon name="smiting-aura"></ms-icon>,
      <ms-skill-overlay skill={ SmitingAura } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
