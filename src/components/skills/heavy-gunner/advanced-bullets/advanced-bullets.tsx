import { Component, Prop } from "@stencil/core";
import { AdvancedBulletsValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-advanced-bullets",
  styleUrls: ["../../skills.scss", "advanced-bullets.scss"],
  shadow: true
})
export class AdvancedBulletsComponent {

  @Prop({ reflectToAttr: true }) level: number = AdvancedBulletsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AdvancedBulletsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AdvancedBulletsValues.levelRequirement[this.level] }+`,
      `Gatling Fire [Level 5+]`,
      `Lock-on [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="advanced-bullets"></ms-icon>,
      <ms-skill-overlay heading="Advanced Bullets"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="advanced-bullets"></ms-icon>
        <div slot="description">
          Upgrade to high performance bullets. Increases the damage of Bullet Spray, Gatling Fire, and Lock-on
          by <span>{ AdvancedBulletsValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
