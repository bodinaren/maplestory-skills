import { Component, Prop } from "@stencil/core";
import { ChainExplosionValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-chain-explosion",
  styleUrls: ["../../skills.scss", "chain-explosion.scss"],
  shadow: true
})
export class ChainExplosionComponent {

  @Prop({ reflectToAttr: true }) level: number = ChainExplosionValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ChainExplosionValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ChainExplosionValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="chain-explosion"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="chain-explosion"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ ChainExplosionValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ ChainExplosionValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
