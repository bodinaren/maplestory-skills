import { Component, Prop } from "@stencil/core";
import { AdrenalineRushValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-adrenaline-rush",
  styleUrls: ["../../skills.scss", "adrenaline-rush.scss"],
  shadow: true
})
export class AdrenalineRushComponent {

  @Prop({ reflectToAttr: true }) level: number = AdrenalineRushValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AdrenalineRushValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AdrenalineRushValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="adrenaline-rush"></ms-icon>,
      <ms-skill-overlay heading="Adrenaline Rush"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="adrenaline-rush"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
