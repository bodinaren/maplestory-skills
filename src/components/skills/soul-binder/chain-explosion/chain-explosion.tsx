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
      `Chain Spear [Level 8+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="chain-explosion"></ms-icon>,
      <ms-skill-overlay heading="Chain Explosion"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="chain-explosion"></ms-icon>
        <div slot="description">
          Gather surrounding energy to create an explosive energy orb and launch it
          at the closest enemy up to <span>7.5</span> m in front of you.
          The energy orb explodes upon collision,
          dealing <span>{ ChainExplosionValues.damage[this.level] }%</span> damage
          to <span>5</span> enemies within a <span>2.25</span> m radius.
          Press the key consecutively to activate a 2-step attack.
        </div>
      </ms-skill-overlay>
    ];
  }
}
