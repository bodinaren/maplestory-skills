import { Component, Prop } from "@stencil/core";
import { ShieldMasteryValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-mastery",
  styleUrls: ["../../skills.scss", "shield-mastery.scss"],
  shadow: true
})
export class ShieldMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldMasteryValues.levelRequirement[this.level] }+`,
      `Iron Shield [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-mastery"></ms-icon>,
      <ms-skill-overlay heading="Shield Mastery"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-mastery"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
