import { Component, Prop } from "@stencil/core";
import { AngelicRayValues } from "../../../global/values/priest";

@Component({
  tag: "ms-angelic-ray",
  styleUrls: ["../skills.scss", "angelic-ray.scss"],
  shadow: true
})
export class AngelicRayComponent {

  @Prop({ reflectToAttr: true }) level: number = AngelicRayValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = AngelicRayValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Scepter Mastery [Level 4+]`,
    ];
  }

  getLevel(): number {
    return AngelicRayValues.levelRequirement[this.level];
  }

  getDamage(): number {
    return AngelicRayValues.damage[this.level];
  }

  getHealing(): number {
    return AngelicRayValues.healing[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="angelic-ray"></ms-icon>
        }
        <ms-skill-overlay heading="Angelic Ray"
                          element="Holy"
                          level={ this.level }
                          type="Long Range / Magic"
                          weaponRequired="Main Hand Scepter, Off-hand Codex"
                          requirements={ this.getRequirements() }
                          spirit={ 30 }
                          cooldown={ 10 }>
          <ms-icon slot="icon" name="angelic-ray"></ms-icon>
          <div slot="description">
            Fire a beam of holy light, dealing <span>{ this.getDamage() }%</span> holy damage
            to <span>8</span> enemies up to <span>12</span> m in front of you.
            Restores health to <span>8</span> allies
            hit equal to <span>{ this.getHealing() }%</span> of your magic attack.
            Consumes <span>30</span> spirit.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
