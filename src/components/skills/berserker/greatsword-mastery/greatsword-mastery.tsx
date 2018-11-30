import { Component, Prop } from "@stencil/core";
import { GreatswordMastery } from "../../../../global/values/berserker";

@Component({
  tag: "ms-greatsword-mastery",
  styleUrls: ["../../skills.scss", "greatsword-mastery.scss"],
  shadow: true
})
export class GreatswordMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = GreatswordMastery.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = GreatswordMastery.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ GreatswordMastery.levelRequirement[this.level] }+`,
      `Raging Slash [Level 3+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="greatsword-mastery"></ms-icon>,
      <ms-skill-overlay heading={ GreatswordMastery.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="greatsword-mastery"></ms-icon>
        <div slot="description">
          Ten's lessons on asceticism increase your skill with a greatsword.
          Your weapon attack increases by <span>{ GreatswordMastery.values.attack[this.level] }%</span> when you have a greatsword equipped.
        </div>
      </ms-skill-overlay>
    ];
  }
}
