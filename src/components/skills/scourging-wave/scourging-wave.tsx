import { Component, Prop } from "@stencil/core";
import { ScourgingWaveValues } from "../../../global/values/priest";

@Component({
  tag: "ms-scourging-wave",
  styleUrls: ["../skills.scss", "scourging-wave.scss"],
  shadow: true
})
export class ScourgingWaveComponent {

  @Prop({ reflectToAttr: true }) level: number = ScourgingWaveValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = ScourgingWaveValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Healing Prayer [Level 2+]`,
    ];
  }

  getLevel(): number {
    return ScourgingWaveValues.levelRequirement[this.level];
  }

  getDamage(): number {
    return ScourgingWaveValues.damage[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="scourging-wave"></ms-icon>
        }
        <ms-skill-overlay heading="Scourging Wave"
                          element="Holy"
                          level={ this.level }
                          type="Long Range / Magic"
                          weaponRequired="Main Hand Scepter"
                          requirements={ this.getRequirements() }
                          spirit={ 18 }>
          <ms-icon slot="icon" name="scourging-wave"></ms-icon>
          <div slot="description">
            Blast holy power <span>7.5</span> m ahead,
            dealing <span>{ this.getDamage() }%</span> holy damage
            to <span>5</span> enemies.
            The skill lasts while the skill key is held down.
            Consumes <span>18</span> spirit.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
