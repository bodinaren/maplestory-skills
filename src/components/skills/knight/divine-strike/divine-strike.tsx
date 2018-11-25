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
          Gathers light and smashes it down, creating a shockwave that
          deals <span>{ DivineStrikeValues.damage[this.level] }%</span> holy damage
          to <span>8</span> enemies and knocks them back <span>2</span> m.
          Enemy attacks will not push you back while this skill is active.
        </div>
      </ms-skill-overlay>
    ];
  }
}
