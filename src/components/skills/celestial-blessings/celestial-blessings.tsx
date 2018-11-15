import { Component, Prop } from "@stencil/core";
import { CelestialBlessingsValues } from "../../../global/values/priest";

@Component({
  tag: "ms-celestial-blessings",
  styleUrls: ["../skills.scss", "celestial-blessings.scss"],
  shadow: true
})
export class CelestialBlessingsComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialBlessingsValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = CelestialBlessingsValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Celestial Guardian [Level 3+]`,
    ];
  }

  getLevel(): number {
    return CelestialBlessingsValues.levelRequirement[this.level];
  }

  getResistance(): number {
    return CelestialBlessingsValues.resistance[this.level];
  }

  getAttackIncrease(): number {
    return CelestialBlessingsValues.attack[this.level];
  }

  getHealing(): number {
    return CelestialBlessingsValues.healing[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="celestial-blessings"></ms-icon>
        }
        <ms-skill-overlay heading="Celestial Blessings"
                          element="Holy"
                          level={ this.level }
                          type="Long Range / Magic"
                          weaponRequired="Off-hand Codex"
                          requirements={ this.getRequirements() }
                          spirit={ 45 }
                          cooldown={ 11 }>
          <ms-icon slot="icon" name="celestial-blessings"></ms-icon>
          <div slot="description">
            With the help of your angel, bless <span>10</span> allies
            within <span>6</span> m for <span>10</span> sec,
            increasing their physical resistance and magic resistance by <span>{ this.getResistance() }</span> and
            their physical attack and magic attack by <span>{ this.getAttackIncrease() }%</span>.
            Restores their health by <span>{ this.getHealing() }%</span> of your magic attack.
            Can only be used when your angel is present.
            Consumes <span>45</span> spirit.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
