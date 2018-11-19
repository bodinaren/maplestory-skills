import { Component, Prop } from "@stencil/core";
import { CryomancyValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-cryomancy",
  styleUrls: ["../../skills.scss", "cryomancy.scss"],
  shadow: true
})
export class CryomancyComponent {

  @Prop({ reflectToAttr: true }) level: number = CryomancyValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CryomancyValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CryomancyValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="cryomancy"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="cryomancy"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
