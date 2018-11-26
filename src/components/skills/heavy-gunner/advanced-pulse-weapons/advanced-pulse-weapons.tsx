import { Component, Prop } from "@stencil/core";
import { AdvancedPulseWeaponsValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-pulse-weapons",
  styleUrls: ["../../skills.scss", "advanced-pulse-weapons.scss"],
  shadow: true
})
export class AdvancedPulseWeaponsComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedPulseWeaponsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AdvancedPulseWeaponsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AdvancedPulseWeaponsValues.levelRequirement[this.level] }+`,
      `Electric Blast [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="advanced-pulse-weapons"></ms-icon>,
      <ms-skill-overlay heading="Advanced Pulse Weapons"
                        element="Electric"
                        level={ this.level }
                        passive={ true }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="advanced-pulse-weapons"></ms-icon>
        <div slot="description">
          Upgrade your cannon's magnetic field engine to increase its output.
          Increase the damage of Magnetic Bomb and Electric Blast
          by <span>{ AdvancedPulseWeaponsValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
