import { Component, Prop } from "@stencil/core";
import { FlashStrikeValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-flash-strike",
  styleUrls: ["../../skills.scss", "flash-strike.scss"],
  shadow: true
})
export class FlashStrikeComponent {

  @Prop({ reflectToAttr: true }) level: number = FlashStrikeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlashStrikeValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlashStrikeValues.levelRequirement[this.level] }+`,
      `Expansion Ball [Level 5+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="flash-strike"></ms-icon>,
      <ms-skill-overlay heading="Flash Strike"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 6 }
                        cooldown={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flash-strike"></ms-icon>
        <div slot="description">
          Gather the energy of light in both hands and release a powerful beam
          that pushes you back <span>1.5</span> m.
          The light beam deals <span>{ FlashStrikeValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies up to <span>10.5</span> m in front of you.
          Consumes <span>6</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
