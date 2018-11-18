import { Component, Prop } from "@stencil/core";
import { ScepterMasteryValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-scepter-mastery",
  styleUrls: ["../../skills.scss", "scepter-mastery.scss"],
  shadow: true
})
export class ScepterMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ScepterMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ScepterMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ScepterMasteryValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="scepter-mastery"></ms-icon>,
      <ms-skill-overlay heading="Scepter Mastery"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="scepter-mastery"></ms-icon>
        <div slot="description">
          Your proficiency with scepters increases weapon attack
          by <span>{ ScepterMasteryValues.attack[this.level] }%</span> when you have a scepter equipped.
        </div>
      </ms-skill-overlay>
    ];
  }
}
