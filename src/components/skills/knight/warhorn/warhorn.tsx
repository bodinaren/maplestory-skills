import { Component, Prop } from "@stencil/core";
import { WarhornValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-warhorn",
  styleUrls: ["../../skills.scss", "warhorn.scss"],
  shadow: true
})
export class WarhornComponent {

  @Prop({ reflectToAttr: true }) level: number = WarhornValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WarhornValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WarhornValues.levelRequirement[this.level] }+`,
      `Shield Wall [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="warhorn"></ms-icon>,
      <ms-skill-overlay heading="Warhorn"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        spirit={ 40 }
                        cooldown={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="warhorn"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
