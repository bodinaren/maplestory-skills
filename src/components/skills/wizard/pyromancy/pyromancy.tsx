import { Component, Prop } from "@stencil/core";
import { Pyromancy } from "../../../../global/values/wizard";

@Component({
  tag: "ms-pyromancy",
  styleUrls: ["../../skills.scss", "pyromancy.scss"],
  shadow: true
})
export class PyromancyComponent {

  @Prop({ reflectToAttr: true }) level: number = Pyromancy.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Pyromancy.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Pyromancy.levelRequirement[this.level] }+`,
      `Flame Wave [Level 5+]`,
      `Flame Tornado [Level 5+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="pyromancy"></ms-icon>,
      <ms-skill-overlay heading={ Pyromancy.name }
                        element="Fire"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="pyromancy"></ms-icon>
        <div slot="description">
          An advanced fire technique taught to only the top students of the Ellinel Magic Academy.
          Increases all fire damage by <span>{ Pyromancy.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
