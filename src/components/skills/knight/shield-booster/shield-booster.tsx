import { Component, Prop } from "@stencil/core";
import { ShieldBoosterValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-booster",
  styleUrls: ["../../skills.scss", "shield-booster.scss"],
  shadow: true
})
export class ShieldBoosterComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldBoosterValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldBoosterValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldBoosterValues.levelRequirement[this.level] }+`,
      `Shield Mastery [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-booster"></ms-icon>,
      <ms-skill-overlay heading="Shield Booster"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-booster"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
