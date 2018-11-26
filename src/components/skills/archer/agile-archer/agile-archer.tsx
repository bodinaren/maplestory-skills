import { Component, Prop } from "@stencil/core";
import { AgileArcherValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-agile-archer",
  styleUrls: ["../../skills.scss", "agile-archer.scss"],
  shadow: true
})
export class AgileArcherComponent {

  @Prop({ reflectToAttr: true }) level: number = AgileArcherValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AgileArcherValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AgileArcherValues.levelRequirement[this.level] }+`,
      `Ice Arrow [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="agile-archer"></ms-icon>,
      <ms-skill-overlay heading="Agile Archer"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="agile-archer"></ms-icon>
        <div slot="description">
          A personal training session with Oska has taught you how to put more power into your shots
          and to move with more agility.
          Increases piercing by <span>{ AgileArcherValues.piercing[this.level] }%</span> and
          evasion by <span>{ AgileArcherValues.evasion[this.level] }</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
