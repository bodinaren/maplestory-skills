import { Component, Prop } from "@stencil/core";
import { DrillThrustValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-drill-thrust",
  styleUrls: ["../../skills.scss", "drill-thrust.scss"],
  shadow: true
})
export class DrillThrustComponent {

  @Prop({ reflectToAttr: true }) level: number = DrillThrustValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DrillThrustValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DrillThrustValues.levelRequirement[this.level] }+`,
      `Divine Strike [Level 6+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="drill-thrust"></ms-icon>,
      <ms-skill-overlay heading="Drill Thrust"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        cooldown={ 8 }
                        max={ this.max }>
        <ms-icon slot="icon" name="drill-thrust"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
