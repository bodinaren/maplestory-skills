import { Component, Prop } from "@stencil/core";
import { HealingMasteryValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-healing-mastery",
  styleUrls: ["../skills.scss", "healing-mastery.scss"],
  shadow: true
})
export class HealingMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = HealingMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HealingMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HealingMasteryValues.levelRequirement[this.level] }+`,
      `Scepter Mastery [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="healing-mastery"></ms-icon>,
      <ms-skill-overlay heading="Healing Mastery"
                        element="Holy"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="healing-mastery"></ms-icon>
        <div slot="description">
          Your experience in combat increases the amount of health and spirit restored through recovery skills
          by <span>{ HealingMasteryValues.recovery[this.level] }%</span>.
          This skill does not affect your natural health and spirit regeneration rates.
        </div>
      </ms-skill-overlay>
    ];
  }
}
