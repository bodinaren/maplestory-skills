import { Component, Prop } from "@stencil/core";
import { CycloneBomberValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-cyclone-bomber",
  styleUrls: ["../../skills.scss", "cyclone-bomber.scss"],
  shadow: true
})
export class CycloneBomberComponent {

  @Prop({ reflectToAttr: true }) level: number = CycloneBomberValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CycloneBomberValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CycloneBomberValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="cyclone-bomber"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="cyclone-bomber"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ CycloneBomberValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ CycloneBomberValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
