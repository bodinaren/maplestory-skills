import { Component, Prop } from "@stencil/core";
import { ScrewdriverShotValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-screwdriver-shot",
  styleUrls: ["../../skills.scss", "screwdriver-shot.scss"],
  shadow: true
})
export class ScrewdriverShotComponent {

  @Prop({ reflectToAttr: true }) level: number = ScrewdriverShotValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ScrewdriverShotValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ScrewdriverShotValues.levelRequirement[this.level] }+`,
      `Rapid Shot [Level 8+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="screwdriver-shot"></ms-icon>,
      <ms-skill-overlay heading={ ScrewdriverShotValues.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        cooldown={ 13 }
                        max={ this.max }>
        <ms-icon slot="icon" name="screwdriver-shot"></ms-icon>
        <div slot="description">
          Loose a spinning arrow up to <span>12</span> m in front of you,
          dealing <span>{ ScrewdriverShotValues.stage1[this.level] }%</span> damage to <span>20</span> enemies in its path.
          Hold the skill key down for <span>0.5</span> sec to enhance the arrow to <span>Lv. 2</span>,
          increasing its damage to <span>{ ScrewdriverShotValues.stage2[this.level] }%</span>.
          Hold the skill key down for <span>0.5</span> sec at <span>Lv. 2</span> to enhance it to <span>Lv. 3</span>,
          increasing its damage to <span>{ ScrewdriverShotValues.stage3[this.level] }%</span>.
          The arrow is shot automatically when it reaches <span>Lv. 3</span>.
          You will be immune to knockback while this skill is active.
          This skill can only be used while Snipe is active.
        </div>
      </ms-skill-overlay>
    ];
  }
}
