import { Component, Prop } from "@stencil/core";
import { InhumanEndurance } from "../../../../global/values/berserker";

@Component({
  tag: "ms-inhuman-endurance",
  styleUrls: ["../../skills.scss", "inhuman-endurance.scss"],
  shadow: true
})
export class InhumanEnduranceComponent {

  @Prop({ reflectToAttr: true }) level: number = InhumanEndurance.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = InhumanEndurance.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ InhumanEndurance.levelRequirement[this.level] }+`,
      `Adrenaline Rush [Level 3+]`,
      `Blood Price [Level 1+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="inhuman-endurance"></ms-icon>,
      <ms-skill-overlay heading={ InhumanEndurance.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="inhuman-endurance"></ms-icon>
        <div slot="description">
          Dire conditions strengthen your resolve.
          Your physical resistance and magic resistance increase
          by <span>{ InhumanEndurance.values.resistance[this.level] }</span> when
          your health is less than <span>30%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
