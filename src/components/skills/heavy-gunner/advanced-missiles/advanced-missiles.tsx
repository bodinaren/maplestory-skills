import { Component, Prop } from "@stencil/core";
import { AdvancedMissiles } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-missiles",
  styleUrls: ["../../skills.scss", "advanced-missiles.scss"],
  shadow: true
})
export class AdvancedMissilesComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedMissiles.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AdvancedMissiles.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AdvancedMissiles.levelRequirement[this.level] }+`,
      `Homing Missiles [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="advanced-missiles"></ms-icon>,
      <ms-skill-overlay heading={ AdvancedMissiles.name }
                        element="Fire"
                        level={ this.level }
                        passive={ true }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="advanced-missiles"></ms-icon>
        <div slot="description">
          Upgrade to high performance missiles.
          Increases the damage of Rocket Launcher, Homing Missiles, and M-Bomb
          by <span>{ AdvancedMissiles.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
