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
          Lift <span>5</span> enemies up to <span>2</span> m in front of you with your shield,
          dealing <span>{ ShieldBoosterValues.damage[this.level] }%</span> damage.
          Increases physical and magic resistance by <span>450</span>.
          For <span>10</span> sec, has a chance to trigger counter when hit.
          Also increases your counterattack damage
          by an additional <span>{ ShieldBoosterValues.increase[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
