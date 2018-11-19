import { Component, Prop } from "@stencil/core";
import { GreatswordMasteryValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-greatsword-mastery",
  styleUrls: ["../../skills.scss", "greatsword-mastery.scss"],
  shadow: true
})
export class GreatswordMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = GreatswordMasteryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = GreatswordMasteryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ GreatswordMasteryValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="greatsword-mastery"></ms-icon>,
      <ms-skill-overlay heading="Greatsword Mastery"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="greatsword-mastery"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
