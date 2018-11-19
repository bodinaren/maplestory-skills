import { Component, Prop } from "@stencil/core";
import { DarkMightValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-might",
  styleUrls: ["../../skills.scss", "dark-might.scss"],
  shadow: true
})
export class DarkMightComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkMightValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DarkMightValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DarkMightValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="dark-might"></ms-icon>,
      <ms-skill-overlay heading="Dark Might"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-might"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
