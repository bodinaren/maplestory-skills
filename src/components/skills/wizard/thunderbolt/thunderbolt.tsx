import { Component, Prop } from "@stencil/core";
import { Thunderbolt } from "../../../../global/values/wizard";

@Component({
  tag: "ms-thunderbolt",
  styleUrls: ["../../skills.scss", "thunderbolt.scss"],
  shadow: true
})
export class ThunderboltComponent {

  @Prop({ reflectToAttr: true }) level: number = Thunderbolt.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Thunderbolt.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Thunderbolt.levelRequirement[this.level] }+`,
      `Chain Lightning [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="thunderbolt"></ms-icon>,
      <ms-skill-overlay heading={ Thunderbolt.name }
                        element="Electric"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Staff"
                        requirements={ this.getRequirements() }
                        spirit={ 40 }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="thunderbolt"></ms-icon>
        <div slot="description">
          Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,
          dealing <span>{ Thunderbolt.values.damage[this.level] }%</span> electric damage.
          The bolt bounces up to <span>8</span> times within <span>5</span> m,
          but won't hit the same target twice in a row. Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
