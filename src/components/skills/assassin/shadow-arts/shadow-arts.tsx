import { Component, Prop } from "@stencil/core";
import { ShadowArts } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-arts",
  styleUrls: ["../../skills.scss", "shadow-arts.scss"],
  shadow: true
})
export class ShadowArtsComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowArts.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShadowArts.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShadowArts.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 5+]`,
      `Soul Grind [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="shadow-arts"></ms-icon>,
      <ms-skill-overlay heading={ ShadowArts.name }
                        element="Dark"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="shadow-arts"></ms-icon>
        <div slot="description">
          Utilize secret assassin techniques to strengthen your command of dark magic.
          Increases the damage of Shadow Burst, Shadow Cutter, Soul Grind, Shadow Web, and Death Sentence
          by <span>{ ShadowArts.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
