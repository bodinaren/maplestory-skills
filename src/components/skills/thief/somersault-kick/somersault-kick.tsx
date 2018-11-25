import { Component, Prop } from "@stencil/core";
import { SomersaultKickValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-somersault-kick",
  styleUrls: ["../../skills.scss", "somersault-kick.scss"],
  shadow: true
})
export class SomersaultKickComponent {

  @Prop({ reflectToAttr: true }) level: number = SomersaultKickValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SomersaultKickValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SomersaultKickValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="somersault-kick"></ms-icon>,
      <ms-skill-overlay heading="Somersault Kick"
                        level={ this.level }
                        type="Close Range / Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="somersault-kick"></ms-icon>
        <div slot="description">
          Perform a somersault kick to deal <span>{ SomersaultKickValues.damage[this.level] }%</span> damage
          to <span>5</span> enemies up to <span>3</span> m in front of you, breaking their stance and decreasing their
          movement speed by <span>{ SomersaultKickValues.movement[this.level] }%</span> and
          jump power by <span>{ SomersaultKickValues.jump[this.level] }%</span>.
          When Cunning is active, this skill is empowered.
        </div>
      </ms-skill-overlay>
    ];
  }
}
