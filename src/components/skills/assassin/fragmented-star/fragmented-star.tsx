import { Component, Prop } from "@stencil/core";
import { FragmentedStarValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-fragmented-star",
  styleUrls: ["../../skills.scss", "fragmented-star.scss"],
  shadow: true
})
export class FragmentedStarComponent {

  @Prop({ reflectToAttr: true }) level: number = FragmentedStarValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FragmentedStarValues.maxLevel;

  getRequirements(): string[] {
    if (FragmentedStarValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ FragmentedStarValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="fragmented-star"></ms-icon>,
      <ms-skill-overlay heading="Fragmented Star"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        spirit={ 20 }
                        max={ this.max }>
        <ms-icon slot="icon" name="fragmented-star"></ms-icon>
        <div slot="description">
          Throw a shattering weapon at the closest enemy
          within <span>8</span> m in front of you which breaks apart on impact to
          deal <span>{ FragmentedStarValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m.
          The damage of this attack is affected by the weapon in your right hand.
          Consumes <span>20</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
