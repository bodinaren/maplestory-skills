import { Component, Prop } from "@stencil/core";
import { ThrownWeaponMastery } from "../../../../global/values/assassin";

@Component({
  tag: "ms-thrown-weapon-mastery",
  styleUrls: ["../../skills.scss", "thrown-weapon-mastery.scss"],
  shadow: true
})
export class ThrownWeaponMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ThrownWeaponMastery.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ThrownWeaponMastery.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ThrownWeaponMastery.levelRequirement[this.level] }+`,
      `Fragmented Star [Level 5+]`,
      `Star Flurry [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="thrown-weapon-mastery"></ms-icon>,
      <ms-skill-overlay heading={ ThrownWeaponMastery.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="thrown-weapon-mastery"></ms-icon>
        <div slot="description">
          Your proficiency with thrown weapons increases your weapon attack
          by <span>{ ThrownWeaponMastery.values.attack[this.level] }%</span> when you have thrown weapons equipped.
        </div>
      </ms-skill-overlay>
    ];
  }
}
