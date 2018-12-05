import { Component, Prop } from "@stencil/core";
import { Cryomancy } from "../../../../global/values/wizard";

@Component({
  tag: "ms-cryomancy",
  styleUrls: ["../../skills.scss", "cryomancy.scss"],
  shadow: true
})
export class CryomancyComponent {

  @Prop({ reflectToAttr: true }) level: number = Cryomancy.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Cryomancy.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Cryomancy.levelRequirement[this.level] }+`,
      `Ice Spear [Level 5+]`,
      `Ice Storm [Level 5+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="cryomancy"></ms-icon>,
      <ms-skill-overlay heading={ Cryomancy.name }
                        element="Ice"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="cryomancy"></ms-icon>
        <div slot="description">
          An advanced ice technique taught to only the top students of the Ellinel Magic Academy.
          Increases all ice damage by <span>{ Cryomancy.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
