import { Component, Prop } from "@stencil/core";
import { StarFlurry } from "../../../../global/values/assassin";

@Component({
  tag: "ms-star-flurry",
  styleUrls: ["../../skills.scss", "star-flurry.scss"],
  shadow: true
})
export class StarFlurryComponent {

  @Prop({ reflectToAttr: true }) level: number = StarFlurry.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = StarFlurry.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ StarFlurry.levelRequirement[this.level] }+`,
      `Lucky Stars [Level 4+]`,
      `Star Chaser [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="star-flurry"></ms-icon>,
      <ms-skill-overlay heading={ StarFlurry.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon, One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 4 }
                        max={ this.max }>
        <ms-icon slot="icon" name="star-flurry"></ms-icon>
        <div slot="description">
          Equip <span>3</span> weapons in each hand and throw them
          at the closest enemy within <span>8</span> m in front of you,
          dealing <span>{ StarFlurry.values.damage[this.level] }%</span> damage <span>6</span> times.
          The damage of each attack is affected by the weapon in each hand.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
