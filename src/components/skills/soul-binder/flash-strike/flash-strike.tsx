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
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="flash-strike"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flash-strike"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ FlashStrikeValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ FlashStrikeValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
