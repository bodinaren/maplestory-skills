import { Component, Prop } from "@stencil/core";
import { HealingPrayerValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-healing-prayer",
  styleUrls: ["../../skills.scss", "healing-prayer.scss"],
  shadow: true
})
export class HealingPrayerComponent {

  @Prop({ reflectToAttr: true }) level: number = HealingPrayerValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HealingPrayerValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HealingPrayerValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="healing-prayer"></ms-icon>,
      <ms-skill-overlay heading="Healing Prayer"
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Codex"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="healing-prayer"></ms-icon>
        <div slot="description">
          Through prayer, restore your health and the health of <span>6</span> allies within <span>3</span> m
          by <span>{ HealingPrayerValues.healing[this.level] }%</span> of your magic attack.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
