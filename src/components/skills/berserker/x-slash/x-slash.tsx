import { Component, Prop } from "@stencil/core";
import { XSlashValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-x-slash",
  styleUrls: ["../../skills.scss", "x-slash.scss"],
  shadow: true
})
export class XSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = XSlashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = XSlashValues.maxLevel;

  render() {
    return [
      <ms-icon name="x-slash"></ms-icon>,
      <ms-skill-overlay heading="X-Slash"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="x-slash"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
