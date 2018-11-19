import { Component, Prop } from "@stencil/core";
import { SoulGrindValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-soul-grind",
  styleUrls: ["../../skills.scss", "soul-grind.scss"],
  shadow: true
})
export class SoulGrindComponent {

  @Prop({ reflectToAttr: true }) level: number = SoulGrindValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SoulGrindValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SoulGrindValues.levelRequirement[this.level] }+`,
      `Lucky Stars [Level 4+]`,
      `Shadow Burst [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="soul-grind"></ms-icon>,
      <ms-skill-overlay heading="Soul Grind"
                        element="Dark"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        spirit={ 30 }
                        cooldown={ 14 }
                        max={ this.max }>
        <ms-icon slot="icon" name="soul-grind"></ms-icon>
        <div slot="description">
          Throw a giant weapon at the closest enemy within <span>8</span> m in front of you,
          which spins rapidonly on impact,
          dealing <span>{ SoulGrindValues.damage[this.level] }%</span> dark damage
          to <span>5</span> enemies within <span>3</span> m <span>5</span> times.
          The damage of this attack is affected by the weapon in your right hand.
          Consumes <span>30</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
