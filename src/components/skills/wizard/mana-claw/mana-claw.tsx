import { Component, Prop } from "@stencil/core";
import { ManaClawValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-mana-claw",
  styleUrls: ["../../skills.scss", "mana-claw.scss"],
  shadow: true
})
export class ManaClawComponent {

  @Prop({ reflectToAttr: true }) level: number = ManaClawValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ManaClawValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ManaClawValues.levelRequirement[this.level] }+`,
      `Arcane Blast [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="mana-claw"></ms-icon>,
      <ms-skill-overlay heading="Mana Claw"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Staff"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="mana-claw"></ms-icon>
        <div slot="description">
          Shoot a sphere of condensed mana at the nearest enemy up to <span>9</span> m in front of you,
          dealing <span>{ ManaClawValues.firstDamage[this.level] }%</span> damage.
          Keep pressing the key to trigger a <span>3-hit</span> combo.
          The first and second strikes have the same effect, but the third strike
          deals <span>{ ManaClawValues.thirdDamage[this.level] }%</span> damage and is always critical.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
