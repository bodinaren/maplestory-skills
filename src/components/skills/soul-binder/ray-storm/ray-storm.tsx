import { Component, Prop } from "@stencil/core";
import { RayStormValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-ray-storm",
  styleUrls: ["../../skills.scss", "ray-storm.scss"],
  shadow: true
})
export class RayStormComponent {

  @Prop({ reflectToAttr: true }) level: number = RayStormValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RayStormValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RayStormValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ray-storm"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ray-storm"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ RayStormValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ RayStormValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
