import { Component, Prop } from "@stencil/core";
import { QuickStep } from "../../../../global/values/thief";

@Component({
  tag: "ms-quick-step",
  styleUrls: ["../../skills.scss", "quick-step.scss"],
  shadow: true
})
export class QuickStepComponent {

  @Prop({ reflectToAttr: true }) level: number = QuickStep.minLevel;

  render() {
    return [
      <ms-icon name="quick-step"></ms-icon>,
      <ms-skill-overlay skill={ QuickStep } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
