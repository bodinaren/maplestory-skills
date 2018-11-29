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
    if (RayStormValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ RayStormValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="ray-storm"></ms-icon>,
      <ms-skill-overlay heading="Ray Storm"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 3 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ray-storm"></ms-icon>
        <div slot="description">
          Concentrate the surrounding energy into both your hands to create energy orbs
          that consecutively launch at the nearest enemy within <span>7.5</span> m,
          dealing <span>{ RayStormValues.damage[this.level] }%</span> damage <span>4</span> times.
          Each energy orb that collides with an enemy ricochets <span>4</span> times
          to other enemies within a <span>3</span> m radius,
          dealing <span>{ RayStormValues.damage[this.level] }%</span> damage.
          Energy orbs do not attack the same target twice.
          Consumes <span>3</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
