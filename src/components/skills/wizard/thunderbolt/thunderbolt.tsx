import { Component, Prop } from "@stencil/core";
import { ThunderboltValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-thunderbolt",
  styleUrls: ["../../skills.scss", "thunderbolt.scss"],
  shadow: true
})
export class ThunderboltComponent {

  @Prop({ reflectToAttr: true }) level: number = ThunderboltValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ThunderboltValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ThunderboltValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="thunderbolt"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="thunderbolt"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
