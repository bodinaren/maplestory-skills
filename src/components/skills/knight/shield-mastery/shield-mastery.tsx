import { Component, Prop } from "@stencil/core";
import { ShieldMasteryValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-mastery",
  styleUrls: ["../../skills.scss", "shield-mastery.scss"],
  shadow: true
})
export class ShieldMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldMasteryValues.levelRequirement[this.level] }+`,
      `Iron Shield [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-mastery"></ms-icon>,
      <ms-skill-overlay heading="Shield Mastery"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-mastery"></ms-icon>
        <div slot="description">
          Your fervent desire to protect others increases your shield mastery,
          increasing critical evasion by <span>{ ShieldMasteryValues.evasion[this.level] }</span> and
          perfect guard chance by <span>{ ShieldMasteryValues.perfectGuard[this.level] }%</span> when
          you have a shield equipped when using Iron Shield. Blocking an attack grants
          a <span>{ ShieldMasteryValues.increaseChance[this.level] }%</span> chance to increase your damage
          by <span>{ ShieldMasteryValues.damage[this.level] }%</span> for <span>10</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
