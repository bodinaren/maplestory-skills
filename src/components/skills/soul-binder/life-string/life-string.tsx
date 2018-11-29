import { Component, Prop } from "@stencil/core";
import { LifeStringValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-life-string",
  styleUrls: ["../../skills.scss", "life-string.scss"],
  shadow: true
})
export class LifeStringComponent {

  @Prop({ reflectToAttr: true }) level: number = LifeStringValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = LifeStringValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ LifeStringValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="life-string"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="life-string"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ LifeStringValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ LifeStringValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
