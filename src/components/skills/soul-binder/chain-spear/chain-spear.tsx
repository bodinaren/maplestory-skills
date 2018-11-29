import { Component, Prop } from "@stencil/core";
import { ChainSpearValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-chain-spear",
  styleUrls: ["../../skills.scss", "chain-spear.scss"],
  shadow: true
})
export class ChainSpearComponent {

  @Prop({ reflectToAttr: true }) level: number = ChainSpearValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ChainSpearValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ChainSpearValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="chain-spear"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="chain-spear"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ ChainSpearValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ ChainSpearValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
