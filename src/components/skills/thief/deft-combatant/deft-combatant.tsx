import { Component, Prop } from "@stencil/core";
import { DeftCombatantValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-deft-combatant",
  styleUrls: ["../../skills.scss", "deft-combatant.scss"],
  shadow: true
})
export class DeftCombatantComponent {

  @Prop({ reflectToAttr: true }) level: number = DeftCombatantValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeftCombatantValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DeftCombatantValues.levelRequirement[this.level] }+`,
      `Vicious Cuts [Level 5+]`,
      `Haste [Level 3+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="deft-combatant"></ms-icon>,
      <ms-skill-overlay heading="Deft Combatant"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="deft-combatant"></ms-icon>
        <div slot="description">
          Intense training has honed your body, increasing the damage output of
          Vicious Cuts and Somersault Kick by <span>{ DeftCombatantValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
