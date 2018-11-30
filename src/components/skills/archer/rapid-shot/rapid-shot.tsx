import { Component, Prop } from "@stencil/core";
import { RapidShotValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-rapid-shot",
  styleUrls: ["../../skills.scss", "rapid-shot.scss"],
  shadow: true
})
export class RapidShotComponent {

  @Prop({ reflectToAttr: true }) level: number = RapidShotValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RapidShotValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RapidShotValues.levelRequirement[this.level] }+`,
      `Arrow Stream [Level 3+]`,
      `Arrow Barrage [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="rapid-shot"></ms-icon>,
      <ms-skill-overlay heading={ RapidShotValues.name }
                        element="Fire"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        spirit={ 7 }
                        max={ this.max }>
        <ms-icon slot="icon" name="rapid-shot"></ms-icon>
        <div slot="description">
          Shoot a series of fire arrows <span>3</span> times,
          dealing <span>{ RapidShotValues.damage[this.level] }%</span> damage to the closest enemy
          up to <span>9</span> m in front of you. The skill lasts while the skill key is held down.
          Fire arrows pierce the enemy <span>3</span> times and can hit enemies behind.
          Consumes <span>7</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
