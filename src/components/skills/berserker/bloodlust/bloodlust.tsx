import { Component, Prop } from "@stencil/core";
import { BloodlustValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-bloodlust",
  styleUrls: ["../../skills.scss", "bloodlust.scss"],
  shadow: true
})
export class BloodlustComponent {

  @Prop({ reflectToAttr: true }) level: number = BloodlustValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BloodlustValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BloodlustValues.levelRequirement[this.level] }+`,
      `Raging Slash [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="bloodlust"></ms-icon>,
      <ms-skill-overlay heading="Bloodlust"
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        cooldown={ 8 }
                        max={ this.max }>
        <ms-icon slot="icon" name="bloodlust"></ms-icon>
        <div slot="description">
          Thrust your darkened greatsword into <span>2</span> enemies up to <span>3</span> m in front of you,
          then pull it out to deal <span>{ BloodlustValues.damage[this.level] }%</span> damage <span>2</span> times.
          The stab attack is always a critical, and pulling the sword out steals health from the enemy,
          restoring <span>{ BloodlustValues.health[this.level] }%</span> of your max health.
          In PvP zones, the amount restored is halved.
        </div>
      </ms-skill-overlay>
    ];
  }
}
