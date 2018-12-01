import { Component, Prop } from "@stencil/core";
import { AdvancedPulseWeapons } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-pulse-weapons",
  styleUrls: ["../../skills.scss", "advanced-pulse-weapons.scss"],
  shadow: true
})
export class AdvancedPulseWeaponsComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedPulseWeapons.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AdvancedPulseWeapons.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AdvancedPulseWeapons.levelRequirement[this.level] }+`,
      `Electric Blast [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="advanced-pulse-weapons"></ms-icon>,
      <ms-skill-overlay heading={ AdvancedPulseWeapons.name }
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
          by <span>{ AdvancedPulseWeapons.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
