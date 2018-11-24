import { Component, Prop } from "@stencil/core";
import { DivineStrikeValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-divine-strike",
  styleUrls: ["../../skills.scss", "divine-strike.scss"],
  shadow: true
})
export class DivineStrikeComponent {

  @Prop({ reflectToAttr: true }) level: number = DivineStrikeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DivineStrikeValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DivineStrikeValues.levelRequirement[this.level] }+`,
      `Tornado Slash [Level 2+]`,
      `Cross Cut [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="divine-strike"></ms-icon>,
      <ms-skill-overlay heading="Divine Strike"
                        element="Holy"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        cooldown={ 8 }
                        max={ this.max }>
        <ms-icon slot="icon" name="divine-strike"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
