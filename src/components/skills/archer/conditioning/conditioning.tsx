import { Component, Prop } from "@stencil/core";
import { ConditioningValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-conditioning",
  styleUrls: ["../../skills.scss", "conditioning.scss"],
  shadow: true
})
export class ConditioningComponent {

  @Prop({ reflectToAttr: true }) level: number = ConditioningValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ConditioningValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ConditioningValues.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="conditioning"></ms-icon>,
      <ms-skill-overlay heading="Conditioning"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="conditioning"></ms-icon>
        <div slot="description">
          Special training with the Green Hoods permanently increases your
          physical attack by <span>{ ConditioningValues.attack[this.level] }%</span> and
          movement speed by <span>{ ConditioningValues.movement[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
