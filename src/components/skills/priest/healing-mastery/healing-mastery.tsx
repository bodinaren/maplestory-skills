import { Component, Prop } from "@stencil/core";
import { HealingMastery } from "../../../../global/values/priest";

@Component({
  tag: "ms-healing-mastery",
  styleUrls: ["../../skills.scss", "healing-mastery.scss"],
  shadow: true
})
export class HealingMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = HealingMastery.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HealingMastery.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HealingMastery.levelRequirement[this.level] }+`,
      `Scepter Mastery [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="healing-mastery"></ms-icon>,
      <ms-skill-overlay heading={ HealingMastery.name }
                        element="Holy"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="healing-mastery"></ms-icon>
        <div slot="description">
          Your experience in combat increases the amount of health and spirit restored through recovery skills
          by <span>{ HealingMastery.values.recovery[this.level] }%</span>.
          This skill does not affect your natural health and spirit regeneration rates.
        </div>
      </ms-skill-overlay>
    ];
  }
}
