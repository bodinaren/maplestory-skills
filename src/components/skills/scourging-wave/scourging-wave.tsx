import { Component, Prop } from "@stencil/core";
import { ScourgingWaveValues } from "../../../global/values/priest";

@Component({
  tag: "ms-scourging-wave",
  styleUrls: ["../skills.scss", "scourging-wave.scss"],
  shadow: true
})
export class ScourgingWaveComponent {

  @Prop({ reflectToAttr: true }) level: number = ScourgingWaveValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ScourgingWaveValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ScourgingWaveValues.levelRequirement[this.level] }+`,
      `Healing Prayer [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="scourging-wave"></ms-icon>,
      <ms-skill-overlay heading="Scourging Wave"
                        element="Holy"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Main Hand Scepter"
                        requirements={ this.getRequirements() }
                        spirit={ 18 }
                        max={ this.max }>
        <ms-icon slot="icon" name="scourging-wave"></ms-icon>
        <div slot="description">
          Blast holy power <span>7.5</span> m ahead,
          dealing <span>{ ScourgingWaveValues.damage[this.level] }%</span> holy damage
          to <span>5</span> enemies.
          The skill lasts while the skill key is held down.
          Consumes <span>18</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
