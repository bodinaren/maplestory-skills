import { Component, Prop } from "@stencil/core";
import { IceStormValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-ice-storm",
  styleUrls: ["../../skills.scss", "ice-storm.scss"],
  shadow: true
})
export class IceStormComponent {

  @Prop({ reflectToAttr: true }) level: number = IceStormValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IceStormValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IceStormValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ice-storm"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ice-storm"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
