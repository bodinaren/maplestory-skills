import { Component, Prop } from "@stencil/core";
import { HolyBlast } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-blast",
  styleUrls: ["../../skills.scss", "holy-blast.scss"],
  shadow: true
})
export class HolyBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = HolyBlast.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HolyBlast.maxLevel;

  getRequirements(): string[] {
    if (HolyBlast.levelRequirement[this.level] > 0) {
      return [
        `Level ${ HolyBlast.levelRequirement[this.level] }+`
      ];
    }
  }

  render() {
    return [
      <ms-icon name="holy-blast"></ms-icon>,
      <ms-skill-overlay heading={ HolyBlast.name }
                        element="Holy"
                        level={ this.level }
                        type="Close Range / Magic"
                        weaponRequired="Main Hand Scepter"
                        requirements={ this.getRequirements() }
                        spirit={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="holy-blast"></ms-icon>
        <div slot="description">
          An eruption of holy power
          deals <span>{ HolyBlast.values.damage[this.level] }%</span> holy damage to <span>8</span> enemies
          within <span>{ HolyBlast.values.range[this.level] }</span> m and knocks them back <span>0.5</span> m.
          If Celestial Light also activates, it causes an explosion that deals an
          additional <span>{ HolyBlast.values.additionalDamage[this.level] }%</span> holy damage
          to enemies within <span>2</span> m. Consumes <span>16</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
