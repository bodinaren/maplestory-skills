import { Component, Prop } from "@stencil/core";
import { BladeDanceValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-blade-dance",
  styleUrls: ["../../skills.scss", "blade-dance.scss"],
  shadow: true
})
export class BladeDanceComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeDanceValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BladeDanceValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BladeDanceValues.levelRequirement[this.level] }+`,
      `Cunning Tactics [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="blade-dance"></ms-icon>,
      <ms-skill-overlay heading="Blade Dance"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger"
                        requirements={ this.getRequirements() }
                        spirit={ 26 }
                        max={ this.max }>
        <ms-icon slot="icon" name="blade-dance"></ms-icon>
        <div slot="description">
          Spin with your daggers out,
          dealing <span>{ BladeDanceValues.firstDamage[this.level] }%</span>,
          then <span>{ BladeDanceValues.firstDamage[this.level] }%</span>,
          and then <span>{ BladeDanceValues.thirdDamage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m.
          While Cunning is active, this skill is enhanced.
          Consumes <span>26</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
