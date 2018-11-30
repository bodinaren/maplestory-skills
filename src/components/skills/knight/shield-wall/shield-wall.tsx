import { Component, Prop } from "@stencil/core";
import { ShieldWall } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-wall",
  styleUrls: ["../../skills.scss", "shield-wall.scss"],
  shadow: true
})
export class ShieldWallComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldWall.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldWall.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldWall.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-wall"></ms-icon>,
      <ms-skill-overlay heading={ ShieldWall.name }
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ 45 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-wall"></ms-icon>
        <div slot="description">
          Create a <span>3</span> m holy field around you for <span>10</span> sec,
          increasing the physical resistance and magic resistance of <span>10</span> allies,
          including yourself, by <span>{ ShieldWall.values.resistance[this.level] }</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
