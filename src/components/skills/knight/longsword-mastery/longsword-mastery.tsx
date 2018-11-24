import { Component, Prop } from "@stencil/core";
import { LongswordMasteryValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-longsword-mastery",
  styleUrls: ["../../skills.scss", "longsword-mastery.scss"],
  shadow: true
})
export class LongswordMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = LongswordMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = LongswordMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ LongswordMasteryValues.levelRequirement[this.level] }+`,
      `Cross Cut [Level 6+]`,
      `Drill Thrust [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="longsword-mastery"></ms-icon>,
      <ms-skill-overlay heading="Longsword Mastery"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="longsword-mastery"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
