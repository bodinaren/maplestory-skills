import { Component, Prop } from "@stencil/core";
import { CelestialLightValues } from "../../../global/values/priest";

@Component({
  tag: "ms-celestial-light",
  styleUrls: ["../skills.scss", "celestial-light.scss"],
  shadow: true
})
export class CelestialLightComponent {

  @Prop({ reflectToAttr: true }) level: number = CelestialLightValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = CelestialLightValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    let lvl = this.getLevel();
    if (lvl > 0) {
      return [
        `Level ${ lvl }+`
      ];
    }
  }

  getLevel(): number {
    return CelestialLightValues.levelRequirement[this.level];
  }

  getDamage(): number {
    return CelestialLightValues.damage[this.level];
  }

  getAdditionalDamage(): number {
    return CelestialLightValues.additionalDamage[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="celestial-light"></ms-icon>
        }
        <ms-skill-overlay heading="Celestial Light"
                          element="Holy"
                          level={ this.level }
                          type="Long Range / Magic"
                          weaponRequired="Main Hand Scepter"
                          requirements={ this.getRequirements() }>
          <ms-icon slot="icon" name="celestial-light"></ms-icon>
          <div slot="description">
            Strikes enemies with holy light,
            dealing <span>{ this.getDamage() }%</span> holy damage
            to <span>3</span> enemies up to <span>8</span> m in front of you,
            plus an additional <span>{ this.getAdditionalDamage() }%</span> holy damage
            per sec for <span>6</span> sec.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
