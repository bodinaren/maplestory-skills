import { Component, Prop } from "@stencil/core";
import { AgileArcher } from "../../../../global/values/archer";

@Component({
  tag: "ms-agile-archer",
  styleUrls: ["../../skills.scss", "agile-archer.scss"],
  shadow: true
})
export class AgileArcherComponent {

  @Prop({ reflectToAttr: true }) level: number = AgileArcher.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AgileArcher.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AgileArcher.levelRequirement[this.level] }+`,
      `Ice Arrow [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="agile-archer"></ms-icon>,
      <ms-skill-overlay heading={ AgileArcher.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="agile-archer"></ms-icon>
        <div slot="description">
          A personal training session with Oska has taught you how to put more power into your shots
          and to move with more agility.
          Increases piercing by <span>{ AgileArcher.values.piercing[this.level] }%</span> and
          evasion by <span>{ AgileArcher.values.evasion[this.level] }</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
