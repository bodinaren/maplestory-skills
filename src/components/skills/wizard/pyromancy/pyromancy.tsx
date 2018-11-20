import { Component, Prop } from "@stencil/core";
import { PyromancyValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-pyromancy",
  styleUrls: ["../../skills.scss", "pyromancy.scss"],
  shadow: true
})
export class PyromancyComponent {

  @Prop({ reflectToAttr: true }) level: number = PyromancyValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = PyromancyValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ PyromancyValues.levelRequirement[this.level] }+`,
      `Flame Wave [Level 5+]`,
      `Flame Tornado [Level 5+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="pyromancy"></ms-icon>,
      <ms-skill-overlay heading="Pyromancy"
                        element="Fire"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="pyromancy"></ms-icon>
        <div slot="description">
          An advanced fire technique taught to only the top students of the Ellinel Magic Academy.
          Increases all fire damage by <span>{ PyromancyValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
