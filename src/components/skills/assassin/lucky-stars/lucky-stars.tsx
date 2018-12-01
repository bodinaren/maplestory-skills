import { Component, Prop } from "@stencil/core";
import { LuckyStars } from "../../../../global/values/assassin";

@Component({
  tag: "ms-lucky-stars",
  styleUrls: ["../../skills.scss", "lucky-stars.scss"],
  shadow: true
})
export class LuckyStarsComponent {

  @Prop({ reflectToAttr: true }) level: number = LuckyStars.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = LuckyStars.maxLevel;

  getRequirements(): string[] {
    if (LuckyStars.levelRequirement[this.level] > 0) {
      return [
        `Level ${ LuckyStars.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="lucky-stars"></ms-icon>,
      <ms-skill-overlay heading={ LuckyStars.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon, One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="lucky-stars"></ms-icon>
        <div slot="description">
          Throw your weapons at the closest enemy within <span>8</span> m to
          deal <span>{ LuckyStars.values.damage[this.level] }%</span> damage <span>2</span> times.
          Each weapon then ricochets to other enemies within <span>3</span> m and
          deals <span>{ LuckyStars.values.aoe[this.level] }%</span> damage <span>2</span> times.
          The damage of each attack is affected by the weapon in each hand.
        </div>
      </ms-skill-overlay>
    ];
  }
}
