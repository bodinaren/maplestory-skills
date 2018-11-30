import { Component, Prop } from "@stencil/core";
import { DrillThrust } from "../../../../global/values/knight";

@Component({
  tag: "ms-drill-thrust",
  styleUrls: ["../../skills.scss", "drill-thrust.scss"],
  shadow: true
})
export class DrillThrustComponent {

  @Prop({ reflectToAttr: true }) level: number = DrillThrust.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DrillThrust.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DrillThrust.levelRequirement[this.level] }+`,
      `Divine Strike [Level 6+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="drill-thrust"></ms-icon>,
      <ms-skill-overlay heading={ DrillThrust.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        cooldown={ 8 }
                        max={ this.max }>
        <ms-icon slot="icon" name="drill-thrust"></ms-icon>
        <div slot="description">
          Strike forth with your weapon, moving you <span>4.5</span> m and creating a whirlwind.
          You pierce enemies in your path,
          dealing <span>{ DrillThrust.values.damage[this.level] }%</span> damage on up to <span>8</span> enemies.
        </div>
      </ms-skill-overlay>
    ];
  }
}
