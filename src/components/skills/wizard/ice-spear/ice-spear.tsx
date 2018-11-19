import { Component, Prop } from "@stencil/core";
import { IceSpearValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-ice-spear",
  styleUrls: ["../../skills.scss", "ice-spear.scss"],
  shadow: true
})
export class IceSpearComponent {

  @Prop({ reflectToAttr: true }) level: number = IceSpearValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IceSpearValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IceSpearValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ice-spear"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ice-spear"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
