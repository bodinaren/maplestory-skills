import { Component, Prop } from "@stencil/core";
import { ArrowStreamValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-arrow-stream",
  styleUrls: ["../../skills.scss", "arrow-stream.scss"],
  shadow: true
})
export class ArrowStreamComponent {

  @Prop({ reflectToAttr: true }) level: number = ArrowStreamValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ArrowStreamValues.maxLevel;

  getRequirements(): string[] {
    if (ArrowStreamValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ ArrowStreamValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="arrow-stream"></ms-icon>,
      <ms-skill-overlay heading={ ArrowStreamValues.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="arrow-stream"></ms-icon>
        <div slot="description">
        Fire a series of arrows that
        deal <span>{ ArrowStreamValues.damage[this.level] }%</span> damage <span>{ ArrowStreamValues.hits[this.level] }%</span> times
        to the closest enemy up to <span>9</span> m in front of you.
        </div>
      </ms-skill-overlay>
    ];
  }
}
