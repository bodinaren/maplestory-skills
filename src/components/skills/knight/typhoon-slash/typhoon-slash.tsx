import { Component, Prop } from "@stencil/core";
import { TyphoonSlashValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-typhoon-slash",
  styleUrls: ["../../skills.scss", "typhoon-slash.scss"],
  shadow: true
})
export class TyphoonSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = TyphoonSlashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = TyphoonSlashValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ TyphoonSlashValues.levelRequirement[this.level] }+`,
      `Tornado Slash [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="typhoon-slash"></ms-icon>,
      <ms-skill-overlay heading="Typhoon Slash"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        spirit={ 50 }
                        max={ this.max }>
        <ms-icon slot="icon" name="typhoon-slash"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
