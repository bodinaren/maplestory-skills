import { Component, Prop } from "@stencil/core";
import { DeftCombatant } from "../../../../global/values/thief";

@Component({
  tag: "ms-deft-combatant",
  styleUrls: ["../../skills.scss", "deft-combatant.scss"],
  shadow: true
})
export class DeftCombatantComponent {

  @Prop({ reflectToAttr: true }) level: number = DeftCombatant.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="deft-combatant"></ms-icon>,
      <ms-skill-overlay skill={ DeftCombatant } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
