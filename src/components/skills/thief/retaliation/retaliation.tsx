import { Component, Prop } from "@stencil/core";
import { Retaliation } from "../../../../global/values/thief";

@Component({
  tag: "ms-retaliation",
  styleUrls: ["../../skills.scss", "retaliation.scss"],
  shadow: true
})
export class RetaliationComponent {

  @Prop({ reflectToAttr: true }) level: number = Retaliation.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Retaliation.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Retaliation.levelRequirement[this.level] }+`,
      `Blade Dance [Level 2+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="retaliation"></ms-icon>,
      <ms-skill-overlay heading={ Retaliation.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="retaliation"></ms-icon>
        <div slot="description">
          Deftly dodge an attack and position yourself for a counterattack,
          which restore <span>{ Retaliation.values.spirit[this.level] }</span> spirit,
          increases physical attack and magic attack by <span>{ Retaliation.values.attack[this.level] }%</span>,
          and increases evasion by <span>{ Retaliation.values.evasion[this.level] }</span> for <span>12</span> sec.
          This effect will not activate again for <span>1</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
