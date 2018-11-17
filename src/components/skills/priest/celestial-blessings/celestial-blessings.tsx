import { Component, Prop } from "@stencil/core";
import { CelestialBlessingsValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-celestial-blessings",
  styleUrls: ["../../skills.scss", "celestial-blessings.scss"],
  shadow: true
})
export class CelestialBlessingsComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialBlessingsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CelestialBlessingsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CelestialBlessingsValues.levelRequirement[this.level] }+`,
      `Celestial Guardian [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="celestial-blessings"></ms-icon>,
      <ms-skill-overlay heading="Celestial Blessings"
                        element="Holy"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Off-hand Codex"
                        requirements={ this.getRequirements() }
                        spirit={ 45 }
                        cooldown={ 11 }
                        max={ this.max }>
        <ms-icon slot="icon" name="celestial-blessings"></ms-icon>
        <div slot="description">
          With the help of your angel, bless <span>10</span> allies
          within <span>6</span> m for <span>10</span> sec,
          increasing their physical resistance and magic resistance
          by <span>{ CelestialBlessingsValues.resistance[this.level] }</span> and their physical attack and magic attack
          by <span>{ CelestialBlessingsValues.attack[this.level] }%</span>. Restores their health
          by <span>{ CelestialBlessingsValues.healing[this.level] }%</span> of your magic attack.
          Can only be used when your angel is present.
          Consumes <span>45</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
