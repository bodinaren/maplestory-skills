import { Component, Prop } from "@stencil/core";
import { ArrowStormValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-arrow-storm",
  styleUrls: ["../../skills.scss", "arrow-storm.scss"],
  shadow: true
})
export class ArrowStormComponent {

  @Prop({ reflectToAttr: true }) level: number = ArrowStormValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ArrowStormValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ArrowStormValues.levelRequirement[this.level] }+`,
      `Arrow Barrage [Level 5+]`,
      `Rapid Shot [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="arrow-storm"></ms-icon>,
      <ms-skill-overlay heading={ ArrowStormValues.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        cooldown={ 13 }
                        max={ this.max }>
        <ms-icon slot="icon" name="arrow-storm"></ms-icon>
        <div slot="description">
          Fire a spreadable arrow straight up into the sky, which rains down a volley that
          deals <span>{ ArrowStormValues.damage[this.level] }%</span> damage <span>20</span> times to <span>8</span> enemies
          within <span>4.5</span> m. Hold the skill down for <span>0.5</span> sec to fire the
          arrow <span>7.5</span> m in front of you instead. You will be immune to knockback while this skill is active.
        </div>
      </ms-skill-overlay>
    ];
  }
}
