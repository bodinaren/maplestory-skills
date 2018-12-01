import { Component, Prop } from "@stencil/core";
import { AdrenalineRush } from "../../../../global/values/berserker";

@Component({
  tag: "ms-adrenaline-rush",
  styleUrls: ["../../skills.scss", "adrenaline-rush.scss"],
  shadow: true
})
export class AdrenalineRushComponent {

  @Prop({ reflectToAttr: true }) level: number = AdrenalineRush.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AdrenalineRush.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AdrenalineRush.levelRequirement[this.level] }+`,
      `Bloodlust [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="adrenaline-rush"></ms-icon>,
      <ms-skill-overlay heading={ AdrenalineRush.name }
                        element="Dark"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="adrenaline-rush"></ms-icon>
        <div slot="description">
          Your Dark Aura goes crazy as you're pushed into a corner, increasing the amount of spirit restored
          by <span>{ AdrenalineRush.values.stage1[this.level] }</span> when your health is at <span>60%</span> or less,
          by <span>{ AdrenalineRush.values.stage2[this.level] }</span> at <span>45%</span> or less,
          and by <span>{ AdrenalineRush.values.stage3[this.level] }</span> at <span>30%</span> or less.
        </div>
      </ms-skill-overlay>
    ];
  }
}
