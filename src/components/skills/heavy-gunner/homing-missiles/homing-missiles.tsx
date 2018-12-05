import { Component, Prop } from "@stencil/core";
import { HomingMissiles } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-homing-missiles",
  styleUrls: ["../../skills.scss", "homing-missiles.scss"],
  shadow: true
})
export class HomingMissilesComponent {

  @Prop({ reflectToAttr: true }) level: number = HomingMissiles.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HomingMissiles.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HomingMissiles.levelRequirement[this.level] }+`,
      `Rocket Launcher [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="homing-missiles"></ms-icon>,
      <ms-skill-overlay heading={ HomingMissiles.name }
                        element="Fire"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="homing-missiles"></ms-icon>
        <div slot="description">
          Fire <span>{ HomingMissiles.values.missiles[this.level] }</span> homing missiles that each
          deal <span>{ HomingMissiles.values.damage[this.level] }%</span> fire damage
          to enemies within <span>9</span> m.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
