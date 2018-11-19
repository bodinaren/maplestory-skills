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
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="earthquake"></ms-icon>,
      <ms-skill-overlay heading="Earthquake"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="earthquake"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
