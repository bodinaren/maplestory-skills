import { Component, Prop } from "@stencil/core";
import { MantraReleaseValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-mantra-release",
  styleUrls: ["../../skills.scss", "mantra-release.scss"],
  shadow: true
})
export class MantraReleaseComponent {

  @Prop({ reflectToAttr: true }) level: number = MantraReleaseValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MantraReleaseValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MantraReleaseValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="mantra-release"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="mantra-release"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ MantraReleaseValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ MantraReleaseValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
