import { Component, Prop } from "@stencil/core";
import { IllusionValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-illusion",
  styleUrls: ["../../skills.scss", "illusion.scss"],
  shadow: true
})
export class IllusionComponent {

  @Prop({ reflectToAttr: true }) level: number = IllusionValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IllusionValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IllusionValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="illusion"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="illusion"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ IllusionValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ IllusionValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
