import { Component, Prop } from "@stencil/core";
import { WarriorsInstinct } from "../../../../global/values/berserker";

@Component({
  tag: "ms-warriors-instinct",
  styleUrls: ["../../skills.scss", "warriors-instinct.scss"],
  shadow: true
})
export class WarriorsInstinctComponent {

  @Prop({ reflectToAttr: true }) level: number = WarriorsInstinct.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WarriorsInstinct.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WarriorsInstinct.levelRequirement[this.level] }+`,
      `Void Slash [Level 6+]`,
      `Dark Breaker [Level 5+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="warriors-instinct"></ms-icon>,
      <ms-skill-overlay heading={ WarriorsInstinct.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="warriors-instinct"></ms-icon>
        <div slot="description">
          Surrender yourself to your natural combat instinct.
          Increases physical resistance by <span>{ WarriorsInstinct.values.resistance[this.level] }</span> and
          piercing by <span>{ WarriorsInstinct.values.piercing[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
