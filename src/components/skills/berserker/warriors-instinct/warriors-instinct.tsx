import { Component, Prop } from "@stencil/core";
import { WarriorsInstinctValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-warriors-instinct",
  styleUrls: ["../../skills.scss", "warriors-instinct.scss"],
  shadow: true
})
export class WarriorsInstinctComponent {

  @Prop({ reflectToAttr: true }) level: number = WarriorsInstinctValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WarriorsInstinctValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WarriorsInstinctValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="warriors-instinct"></ms-icon>,
      <ms-skill-overlay heading="Warriors Instinct"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="warriors-instinct"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
