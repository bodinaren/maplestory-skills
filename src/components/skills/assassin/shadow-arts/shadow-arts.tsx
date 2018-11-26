import { Component, Prop } from "@stencil/core";
import { ShadowArtsValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-arts",
  styleUrls: ["../../skills.scss", "shadow-arts.scss"],
  shadow: true
})
export class ShadowArtsComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowArtsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShadowArtsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShadowArtsValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 5+]`,
      `Soul Grind [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="shadow-arts"></ms-icon>,
      <ms-skill-overlay heading="Shadow Arts"
                        element="Dark"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="shadow-arts"></ms-icon>
        <div slot="description">
          Utilize secret assassin techniques to strengthen your command of dark magic.
          Increases the damage of Shadow Burst, Shadow Cutter, Soul Grind, Shadow Web, and Death Sentence
          by <span>{ ShadowArtsValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
