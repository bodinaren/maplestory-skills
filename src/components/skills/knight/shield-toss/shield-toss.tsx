import { Component, Prop } from "@stencil/core";
import { ShieldTossValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-toss",
  styleUrls: ["../../skills.scss", "shield-toss.scss"],
  shadow: true
})
export class ShieldTossComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldTossValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldTossValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldTossValues.levelRequirement[this.level] }+`,
      `Iron Shield [Level 4+]`,
      `Typhoon Slash [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-toss"></ms-icon>,
      <ms-skill-overlay heading="Shield Toss"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        spirit={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-toss"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
