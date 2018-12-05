import { Component, Prop } from "@stencil/core";
import { LongswordMastery } from "../../../../global/values/knight";

@Component({
  tag: "ms-longsword-mastery",
  styleUrls: ["../../skills.scss", "longsword-mastery.scss"],
  shadow: true
})
export class LongswordMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = LongswordMastery.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = LongswordMastery.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ LongswordMastery.levelRequirement[this.level] }+`,
      `Cross Cut [Level 6+]`,
      `Drill Thrust [Level 2+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="longsword-mastery"></ms-icon>,
      <ms-skill-overlay heading={ LongswordMastery.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="longsword-mastery"></ms-icon>
        <div slot="description">
          Captain Allon's secret training improves your swordsmanship, increasing your weapon attack
          by <span>{ LongswordMastery.values.attack[this.level] }%</span> when you have a longsword equipped.
        </div>
      </ms-skill-overlay>
    ];
  }
}
