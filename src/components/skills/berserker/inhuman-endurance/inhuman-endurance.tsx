import { Component, Prop } from "@stencil/core";
import { InhumanEnduranceValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-inhuman-endurance",
  styleUrls: ["../../skills.scss", "inhuman-endurance.scss"],
  shadow: true
})
export class InhumanEnduranceComponent {

  @Prop({ reflectToAttr: true }) level: number = InhumanEnduranceValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = InhumanEnduranceValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ InhumanEnduranceValues.levelRequirement[this.level] }+`,
      `Adrenaline Rush [Level 3+]`,
      `Blood Price [Level 1+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="inhuman-endurance"></ms-icon>,
      <ms-skill-overlay heading="Inhuman Endurance"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="inhuman-endurance"></ms-icon>
        <div slot="description">
          Dire conditions strengthen your resolve.
          Your physical resistance and magic resistance increase
          by <span>{ InhumanEnduranceValues.resistance[this.level] }</span> when
          your health is less than <span>30%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
