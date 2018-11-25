import { Component, Prop } from "@stencil/core";
import { DefenderOfTheFaithValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-defender-of-the-faith",
  styleUrls: ["../../skills.scss", "defender-of-the-faith.scss"],
  shadow: true
})
export class DefenderOfTheFaithComponent {

  @Prop({ reflectToAttr: true }) level: number = DefenderOfTheFaithValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DefenderOfTheFaithValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DefenderOfTheFaithValues.levelRequirement[this.level] }+`,
      `Shield Wall [Level 4+]`,
      `Warhorn [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="defender-of-the-faith"></ms-icon>,
      <ms-skill-overlay heading="Defender of the Faith"
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ DefenderOfTheFaithValues.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="defender-of-the-faith"></ms-icon>
        <div slot="description">
          Dash to the nearest ally within <span>8</span> m to create a protective barrier that
          lasts <span>3</span> sec and makes <span>{ DefenderOfTheFaithValues.allies[this.level] }</span> allies,
          including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.
        </div>
      </ms-skill-overlay>
    ];
  }
}
