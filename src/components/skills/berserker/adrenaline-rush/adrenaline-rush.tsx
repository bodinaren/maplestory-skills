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
      `Bloodlust [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="adrenaline-rush"></ms-icon>,
      <ms-skill-overlay heading="Adrenaline Rush"
                        element="Dark"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="adrenaline-rush"></ms-icon>
        <div slot="description">
          Your Dark Aura goes crazy as you're pushed into a corner, increasing the amount of spirit restored
          by <span>{ AdrenalineRushValues.stage1[this.level] }</span> when your health is at <span>60%</span> or less,
          by <span>{ AdrenalineRushValues.stage2[this.level] }</span> at <span>45%</span> or less,
          and by <span>{ AdrenalineRushValues.stage3[this.level] }</span> at <span>30%</span> or less.
        </div>
      </ms-skill-overlay>
    ];
  }
}
