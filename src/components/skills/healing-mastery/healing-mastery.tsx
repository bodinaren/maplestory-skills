import { Component, Prop } from "@stencil/core";
import { HealingMasteryValues } from "../../../global/values/priest";

@Component({
  tag: "ms-healing-mastery",
  styleUrls: ["../skills.scss", "healing-mastery.scss"],
  shadow: true
})
export class HealingMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = HealingMasteryValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = HealingMasteryValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Scepter Mastery [Level 4+]`,
    ];
  }

  getLevel(): number {
    return HealingMasteryValues.levelRequirement[this.level];
  }

  getRecoveryIncrease(): number {
    return HealingMasteryValues.recovery[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="healing-mastery"></ms-icon>
        }
        <ms-skill-overlay heading="Healing Mastery"
                          element="Holy"
                          level={ this.level }
                          passive={ true }
                          requirements={ this.getRequirements() }>
          <ms-icon slot="icon" name="healing-mastery"></ms-icon>
          <div slot="description">
            Your experience in combat increases the amount of health and spirit
            restored through recovery skills by <span>{ this.getRecoveryIncrease() }%</span>.
            This skill does not affect your natural health and spirit regeneration rates.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
