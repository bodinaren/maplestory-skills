import { Component, Prop } from "@stencil/core";
import { ScepterMasteryValues } from "../../../global/values/priest";

@Component({
  tag: "ms-scepter-mastery",
  styleUrls: ["../skills.scss", "scepter-mastery.scss"],
  shadow: true
})
export class ScepterMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ScepterMasteryValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = ScepterMasteryValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
    ];
  }

  getLevel(): number {
    return ScepterMasteryValues.levelRequirement[this.level];
  }

  getAttackIncrease(): number {
    return ScepterMasteryValues.attack[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="scepter-mastery"></ms-icon>
        }
        <ms-skill-overlay heading="Scepter Mastery"
                          level={ this.level }
                          passive={ true }
                          requirements={ this.getRequirements() }>
          <ms-icon slot="icon" name="scepter-mastery"></ms-icon>
          <div slot="description">
            Your proficiency with scepters increases weapon attack
            by <span>{ this.getAttackIncrease() }%</span> when you have a scepter equipped.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
