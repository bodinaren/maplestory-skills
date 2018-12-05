import { Component, Prop } from "@stencil/core";
import { BladeDance } from "../../../../global/values/thief";

@Component({
  tag: "ms-blade-dance",
  styleUrls: ["../../skills.scss", "blade-dance.scss"],
  shadow: true
})
export class BladeDanceComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeDance.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BladeDance.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BladeDance.levelRequirement[this.level] }+`,
      `Cunning Tactics [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="blade-dance"></ms-icon>,
      <ms-skill-overlay heading={ BladeDance.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger"
                        requirements={ this.getRequirements() }
                        spirit={ 26 }
                        max={ this.max }>
        <ms-icon slot="icon" name="blade-dance"></ms-icon>
        <div slot="description">
          Spin with your daggers out,
          dealing <span>{ BladeDance.values.firstDamage[this.level] }%</span>,
          then <span>{ BladeDance.values.firstDamage[this.level] }%</span>,
          and then <span>{ BladeDance.values.thirdDamage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m.
          While Cunning is active, this skill is enhanced.
          Consumes <span>26</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
