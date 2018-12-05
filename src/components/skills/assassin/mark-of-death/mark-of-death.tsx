import { Component, Prop } from "@stencil/core";
import { MarkOfDeath } from "../../../../global/values/assassin";

@Component({
  tag: "ms-mark-of-death",
  styleUrls: ["../../skills.scss", "mark-of-death.scss"],
  shadow: true
})
export class MarkOfDeathComponent {

  @Prop({ reflectToAttr: true }) level: number = MarkOfDeath.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MarkOfDeath.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MarkOfDeath.levelRequirement[this.level] }+`,
      `Dark Cloak [Level 2+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="mark-of-death"></ms-icon>,
      <ms-skill-overlay heading={ MarkOfDeath.name }
                        element="Dark"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="mark-of-death"></ms-icon>
        <div slot="description">
          Attacks against enemies with <span>30%</span> health or less
          have a <span>25%</span> to mark them for death for <span>6</span> sec.
          Marked enemies take <span>{ MarkOfDeath.values.damage[this.level] }%</span> additional damage.
        </div>
      </ms-skill-overlay>
    ];
  }
}
