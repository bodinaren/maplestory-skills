import { Component, Prop } from "@stencil/core";
import { Conditioning } from "../../../../global/values/archer";

@Component({
  tag: "ms-conditioning",
  styleUrls: ["../../skills.scss", "conditioning.scss"],
  shadow: true
})
export class ConditioningComponent {

  @Prop({ reflectToAttr: true }) level: number = Conditioning.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Conditioning.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Conditioning.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="conditioning"></ms-icon>,
      <ms-skill-overlay heading={ Conditioning.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="conditioning"></ms-icon>
        <div slot="description">
          Special training with the Green Hoods permanently increases your
          physical attack by <span>{ Conditioning.values.attack[this.level] }%</span> and
          movement speed by <span>{ Conditioning.values.movement[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
