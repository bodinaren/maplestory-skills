import { Component, Prop } from "@stencil/core";
import { QuickStep } from "../../../../global/values/thief";

@Component({
  tag: "ms-quick-step",
  styleUrls: ["../../skills.scss", "quick-step.scss"],
  shadow: true
})
export class QuickStepComponent {

  @Prop({ reflectToAttr: true }) level: number = QuickStep.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = QuickStep.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ QuickStep.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="quick-step"></ms-icon>,
      <ms-skill-overlay heading={ QuickStep.name }
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="quick-step"></ms-icon>
        <div slot="description">
          Swiftly move back <span>3</span> m and
          recover <span>{ QuickStep.values.spirit[this.level] }</span> spirit.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
