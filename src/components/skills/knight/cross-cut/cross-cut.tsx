import { Component, Prop } from "@stencil/core";
import { CrossCut } from "../../../../global/values/knight";

@Component({
  tag: "ms-cross-cut",
  styleUrls: ["../../skills.scss", "cross-cut.scss"],
  shadow: true
})
export class CrossCutComponent {

  @Prop({ reflectToAttr: true }) level: number = CrossCut.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CrossCut.maxLevel;

  getRequirements(): string[] {
    if (CrossCut.levelRequirement[this.level] > 0) {
      return [
        `Level ${ CrossCut.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="cross-cut"></ms-icon>,
      <ms-skill-overlay heading={ CrossCut.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="cross-cut"></ms-icon>
        <div slot="description">
          A swing of your sword deals <span>{ CrossCut.values.damage[this.level] }%</span> damage <span>2</span> times
          to <span>5</span> enemies up to <span>3</span> m in front of you.
        </div>
      </ms-skill-overlay>
    ];
  }
}
