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
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="pyromancy"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
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
