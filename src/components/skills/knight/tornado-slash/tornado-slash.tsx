import { Component, Prop } from "@stencil/core";
import { TornadoSlashValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-tornado-slash",
  styleUrls: ["../../skills.scss", "tornado-slash.scss"],
  shadow: true
})
export class TornadoSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = TornadoSlashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = TornadoSlashValues.maxLevel;

  getRequirements(): string[] {
    if (TornadoSlashValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ TornadoSlashValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="tornado-slash"></ms-icon>,
      <ms-skill-overlay heading="Tornado Slash"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        spirit={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="tornado-slash"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
