import { Component, Prop } from "@stencil/core";
import { QuickStepValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-quick-step",
  styleUrls: ["../../skills.scss", "quick-step.scss"],
  shadow: true
})
export class QuickStepComponent {

  @Prop({ reflectToAttr: true }) level: number = QuickStepValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = QuickStepValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ QuickStepValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="quick-step"></ms-icon>,
      <ms-skill-overlay heading="Quick Step"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="quick-step"></ms-icon>
        <div slot="description">
          Swiftly move back <span>3</span> m and
          recover <span>{ QuickStepValues.spirit[this.level] }</span> spirit.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
