import { Component, Prop } from "@stencil/core";
import { ExpansionBallValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-expansion-ball",
  styleUrls: ["../../skills.scss", "expansion-ball.scss"],
  shadow: true
})
export class ExpansionBallComponent {

  @Prop({ reflectToAttr: true }) level: number = ExpansionBallValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ExpansionBallValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ExpansionBallValues.levelRequirement[this.level] }+`,
      `Chain Spear [Level 2+]`,
      `Ray Storm [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="expansion-ball"></ms-icon>,
      <ms-skill-overlay heading="Expansion Ball"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 4 }
                        cooldown={ 8 }
                        max={ this.max }>
        <ms-icon slot="icon" name="expansion-ball"></ms-icon>
        <div slot="description">
          Condense the energy of Narubashan into a powerful one-meter-wide
          electric energy orb and send it <span>7.5</span> m forward,
          dealing <span>{ ExpansionBallValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within its path.
          The electric energy orb shocks targets, dealing an
          additional <span>20%</span> electric damage
          every sec for <span>3</span> sec.
          The enhancement level changes and activates depending on the number of Mantra Cores.
          Consumes <span>4</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
