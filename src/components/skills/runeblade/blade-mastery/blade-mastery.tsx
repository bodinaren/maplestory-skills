import { Component, Prop } from "@stencil/core";
import { BladeMastery } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-blade-mastery",
  styleUrls: ["../../skills.scss", "blade-mastery.scss"],
  shadow: true
})
export class BladeMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeMastery.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BladeMastery.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BladeMastery.levelRequirement[this.level] }+`,
      `Flurry [Level 5+]`,
      `Illusory Blades [Level 3+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="blade-mastery"></ms-icon>,
      <ms-skill-overlay heading={ BladeMastery.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="blade-mastery"></ms-icon>
        <div slot="description">
          The teachings of the Pelgia Sect have sharpened your swordsmanship. Increases weapon attack
          by <span>{ BladeMastery.values.damage[this.level] }%</span> when you have a blade equipped.
        </div>
      </ms-skill-overlay>
    ];
  }
}
