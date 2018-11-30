import { Component, Prop } from "@stencil/core";
import { EagleClawValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagle-claw",
  styleUrls: ["../../skills.scss", "eagle-claw.scss"],
  shadow: true
})
export class EagleClawComponent {

  @Prop({ reflectToAttr: true }) level: number = EagleClawValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EagleClawValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ EagleClawValues.levelRequirement[this.level] }+`,
      `Bronze Eagle [Level 7+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="eagle-claw"></ms-icon>,
      <ms-skill-overlay heading={ EagleClawValues.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="eagle-claw"></ms-icon>
        <div slot="description">
          Command Bronze Eagle to attack,
          dealing <span>{ EagleClawValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies up to <span>9</span> m in front of you.
          Your companion also scratches enemies, dealing an
          additional <span>{ EagleClawValues.additionalDamage[this.level] }%</span> damage
          every sec for <span>6</span> sec and reducing their movement speed and
          jump power by <span>{ EagleClawValues.movement[this.level] }%</span>.
          This skill can only be used while Bronze Eagle is around,
          and Bronze Eagle disappears after the skill is used.
        </div>
      </ms-skill-overlay>
    ];
  }
}
