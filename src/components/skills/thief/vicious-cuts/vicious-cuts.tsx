import { Component, Prop } from "@stencil/core";
import { ViciousCutsValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-vicious-cuts",
  styleUrls: ["../../skills.scss", "vicious-cuts.scss"],
  shadow: true
})
export class ViciousCutsComponent {

  @Prop({ reflectToAttr: true }) level: number = ViciousCutsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ViciousCutsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ViciousCutsValues.levelRequirement[this.level] }+`,
      `Somersault Kick [Level 2+]`,
      `Mind Breaker [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="vicious-cuts"></ms-icon>,
      <ms-skill-overlay heading="Vicious Cuts"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger, One-handed Dagger"
                        requirements={ this.getRequirements() }
                        spirit={ 28 }
                        max={ this.max }>
        <ms-icon slot="icon" name="vicious-cuts"></ms-icon>
        <div slot="description">
          Quickly stab with your daggers,
          dealing <span>{ ViciousCutsValues.damage[this.level] }%</span> damage <span>5</span> times
          to <span>3</span> enemies up to <span>3</span> m in front of you.
          While Cunning is active, this skill is enhanced.
          The damage of each attack is affected by the weapon in each hand.
          Consumes <span>28</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
