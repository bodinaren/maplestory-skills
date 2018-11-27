import { Component, Prop } from "@stencil/core";
import { WarriorsInstinctValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-warriors-instinct",
  styleUrls: ["../../skills.scss", "warriors-instinct.scss"],
  shadow: true
})
export class WarriorsInstinctComponent {

  @Prop({ reflectToAttr: true }) level: number = WarriorsInstinctValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WarriorsInstinctValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WarriorsInstinctValues.levelRequirement[this.level] }+`,
      `Void Slash [Level 6+]`,
      `Dark Breaker [Level 5+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="warriors-instinct"></ms-icon>,
      <ms-skill-overlay heading="Warrior's Instinct"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="warriors-instinct"></ms-icon>
        <div slot="description">
          Surrender yourself to your natural combat instinct.
          Increases physical resistance by <span>{ WarriorsInstinctValues.resistance[this.level] }</span> and
          piercing by <span>{ WarriorsInstinctValues.piercing[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
