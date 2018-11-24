import { Component, Prop } from "@stencil/core";
import { CryomancyValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-cryomancy",
  styleUrls: ["../../skills.scss", "cryomancy.scss"],
  shadow: true
})
export class CryomancyComponent {

  @Prop({ reflectToAttr: true }) level: number = CryomancyValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CryomancyValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CryomancyValues.levelRequirement[this.level] }+`,
      `Ice Spear [Level 5+]`,
      `Ice Storm [Level 5+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="cryomancy"></ms-icon>,
      <ms-skill-overlay heading="Cryomancy"
                        element="Ice"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="cryomancy"></ms-icon>
        <div slot="description">
          An advanced ice technique taught to only the top students of the Ellinel Magic Academy.
          Increases all ice damage by <span>{ CryomancyValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}