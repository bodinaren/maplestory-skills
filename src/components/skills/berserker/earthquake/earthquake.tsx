import { Component, Prop } from "@stencil/core";
import { EarthquakeValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-earthquake",
  styleUrls: ["../../skills.scss", "earthquake.scss"],
  shadow: true
})
export class EarthquakeComponent {

  @Prop({ reflectToAttr: true }) level: number = EarthquakeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EarthquakeValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ EarthquakeValues.levelRequirement[this.level] }+`,
      `Deep Wounds [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="earthquake"></ms-icon>,
      <ms-skill-overlay heading="Earthquake"
                        level={ this.level }
                        type="Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="earthquake"></ms-icon>
        <div slot="description">
          Drive your greatsword into the ground, creating an
          earthquake <span>9</span> tiles around you for <span>5</span> sec.
          Enemies caught in the quake are stunned and
          take <span>{ EarthquakeValues.damage[this.level] }%</span> damage every second.
        </div>
      </ms-skill-overlay>
    ];
  }
}
