import { Component, Prop } from "@stencil/core";
import { CelestialGuardianValues } from "../../../global/values/priest";

@Component({
  tag: "ms-celestial-guardian",
  styleUrls: ["../skills.scss", "celestial-guardian.scss"],
  shadow: true
})
export class CelestialGuardianComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialGuardianValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = CelestialGuardianValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
    ];
  }

  getLevel(): number {
    return CelestialGuardianValues.levelRequirement[this.level];
  }

  getAttackIncrease(): number {
    return CelestialGuardianValues.attack[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="celestial-guardian"></ms-icon>
        }
        <ms-skill-overlay heading="Celestial Guardian"
                          element="Holy"
                          level={ this.level }
                          weaponRequired="Off-hand Codex"
                          requirements={ this.getRequirements() }
                          spirit={ 45 }
                          cooldown={ 30 }>
          <ms-icon slot="icon" name="celestial-guardian"></ms-icon>
          <div slot="description">
            Summons a little angel for <span>30</span> sec,
            who increases your magic attack
            by <span>{ this.getAttackIncrease() }%</span> when you have a codex equipped.
            Consumes <span>45</span> spirit.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
