import { Component, Prop } from "@stencil/core";
import { DefenderOfTheFaith } from "../../../../global/values/knight";

@Component({
  tag: "ms-defender-of-the-faith",
  styleUrls: ["../../skills.scss", "defender-of-the-faith.scss"],
  shadow: true
})
export class DefenderOfTheFaithComponent {

  @Prop({ reflectToAttr: true }) level: number = DefenderOfTheFaith.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DefenderOfTheFaith.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DefenderOfTheFaith.levelRequirement[this.level] }+`,
      `Shield Wall [Level 4+]`,
      `Warhorn [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="defender-of-the-faith"></ms-icon>,
      <ms-skill-overlay heading={ DefenderOfTheFaith.name }
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ DefenderOfTheFaith.values.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="defender-of-the-faith"></ms-icon>
        <div slot="description">
          Dash to the nearest ally within <span>8</span> m to create a protective barrier that
          lasts <span>3</span> sec and makes <span>{ DefenderOfTheFaith.values.allies[this.level] }</span> allies,
          including yourself, invulnerable to enemy attacks. Some attacks cannot be blocked.
        </div>
      </ms-skill-overlay>
    ];
  }
}
