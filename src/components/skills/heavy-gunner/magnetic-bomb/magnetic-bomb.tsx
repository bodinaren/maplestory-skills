import { Component, Prop } from "@stencil/core";
import { MagneticBombValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-magnetic-bomb",
  styleUrls: ["../../skills.scss", "magnetic-bomb.scss"],
  shadow: true
})
export class MagneticBombComponent {

  @Prop({ reflectToAttr: true }) level: number = MagneticBombValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MagneticBombValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MagneticBombValues.levelRequirement[this.level] }+`,
      `Bullet Sprak [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="magnetic-bomb"></ms-icon>,
      <ms-skill-overlay heading="Magnetic Bomb"
                        element="Electric"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        spirit={ 20 }
                        cooldown={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="magnetic-bomb"></ms-icon>
        <div slot="description">
          Launch a magnetic bomb at the closest enemy up to <span>9</span> m in front of you.
          The bomb attracts <span>8</span> enemies within <span>3</span> m every second,
          dealing <span>{ MagneticBombValues.damage[this.level] }%</span> electric damage and decreasing
          their movement speed by <span>{ MagneticBombValues.movement[this.level] }%</span>.
          Consumes <span>20</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
