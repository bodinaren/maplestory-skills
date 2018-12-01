import { Component, Prop } from "@stencil/core";
import { ShieldBooster } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-booster",
  styleUrls: ["../../skills.scss", "shield-booster.scss"],
  shadow: true
})
export class ShieldBoosterComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldBooster.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldBooster.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldBooster.levelRequirement[this.level] }+`,
      `Shield Mastery [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-booster"></ms-icon>,
      <ms-skill-overlay heading={ ShieldBooster.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-booster"></ms-icon>
        <div slot="description">
          Lift <span>5</span> enemies up to <span>2</span> m in front of you with your shield,
          dealing <span>{ ShieldBooster.values.damage[this.level] }%</span> damage.
          Increases physical and magic resistance by <span>450</span>.
          For <span>10</span> sec, has a chance to trigger counter when hit.
          Also increases your counterattack damage
          by an additional <span>{ ShieldBooster.values.increase[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
