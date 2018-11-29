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
    if (ChainSpearValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ ChainSpearValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="chain-spear"></ms-icon>,
      <ms-skill-overlay heading="Chain Spear"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="chain-spear"></ms-icon>
        <div slot="description">
          Gather energy from your surroundings to create an energy orb
          and launch it at the nearest enemy <span>7.5</span> m in front,
          dealing <span>{ ChainSpearValues.damage[this.level] }%</span> damage.
          By pressing the key consecutively, a 3-stage attack can be performed.
          Stages 1 and 2 have the same effect,
          but stage 3 launches an energy orb that explodes upon collision,
          dealing <span>{ ChainSpearValues.aoe[this.level] }%</span> damage
          to <span>5</span> enemies within a <span>2.25</span> m radius.
        </div>
      </ms-skill-overlay>
    ];
  }
}
