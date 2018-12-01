import { Component, Prop } from "@stencil/core";
import { StarChaser } from "../../../../global/values/assassin";

@Component({
  tag: "ms-star-chaser",
  styleUrls: ["../../skills.scss", "star-chaser.scss"],
  shadow: true
})
export class StarChaserComponent {

  @Prop({ reflectToAttr: true }) level: number = StarChaser.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = StarChaser.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ StarChaser.levelRequirement[this.level] }+`,
      `Fragmented Star [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="star-chaser"></ms-icon>,
      <ms-skill-overlay heading={ StarChaser.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon, One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 4 }
                        max={ this.max }>
        <ms-icon slot="icon" name="star-chaser"></ms-icon>
        <div slot="description">
          Equip <span>4</span> homing weapons in each hand,
          and throw them at <span>8</span> enemies up to <span>8</span> m in front of you,
          dealing <span>{ StarChaser.values.damage[this.level] }%</span> damage per hit.
          The damage of each attack is affected by the weapon in each hand.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
