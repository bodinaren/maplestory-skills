import { Component, Prop } from "@stencil/core";
import { DiscipleValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-disciple",
  styleUrls: ["../../skills.scss", "disciple.scss"],
  shadow: true
})
export class DiscipleComponent {

  @Prop({ reflectToAttr: true }) level: number = DiscipleValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DiscipleValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DiscipleValues.levelRequirement[this.level] }+`,
      `Celestial Blessings [Level 6+]`,
      `Holy Symbol [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="disciple"></ms-icon>,
      <ms-skill-overlay heading="Disciple"
                        element="Holy"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="disciple"></ms-icon>
        <div slot="description">
          Increases the duration of Celestial Guardian,
          Celestial Blessings, and Holy Symbol buffs
          by <span>{ DiscipleValues.duration[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
