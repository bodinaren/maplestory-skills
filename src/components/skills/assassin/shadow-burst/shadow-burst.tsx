import { Component, Prop } from "@stencil/core";
import { ShadowBurst } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-burst",
  styleUrls: ["../../skills.scss", "shadow-burst.scss"],
  shadow: true
})
export class ShadowBurstComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowBurst.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShadowBurst.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShadowBurst.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shadow-burst"></ms-icon>,
      <ms-skill-overlay heading={ ShadowBurst.name }
                        element="Dark"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon, One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        spirit={ 30 }
                        cooldown={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shadow-burst"></ms-icon>
        <div slot="description">
          Equip <span>5</span> thrown weapons imbued with dark magic in each hand,
          then throw them forward at the same time to
          deal <span>{ ShadowBurst.values.damage[this.level] }%</span> dark damage <span>2</span> times
          to <span>8</span> enemies within <span>8</span> m.
          If any of the enemies hit are marked for death the mark explodes,
          dealing an additional <span>{ ShadowBurst.values.additionalDamage[this.level] }%</span> dark damage.
          The damage of each attack is affected by the weapon in each hand.
          Consumes <span>30</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
