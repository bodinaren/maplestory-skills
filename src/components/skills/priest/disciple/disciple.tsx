import { Component, Prop } from "@stencil/core";
import { Disciple } from "../../../../global/values/priest";

@Component({
  tag: "ms-disciple",
  styleUrls: ["../../skills.scss", "disciple.scss"],
  shadow: true
})
export class DiscipleComponent {

  @Prop({ reflectToAttr: true }) level: number = Disciple.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Disciple.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Disciple.levelRequirement[this.level] }+`,
      `Celestial Blessings [Level 6+]`,
      `Holy Symbol [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="disciple"></ms-icon>,
      <ms-skill-overlay heading={ Disciple.name }
                        element="Holy"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="disciple"></ms-icon>
        <div slot="description">
          Increases the duration of Celestial Guardian,
          Celestial Blessings, and Holy Symbol buffs
          by <span>{ Disciple.values.duration[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
