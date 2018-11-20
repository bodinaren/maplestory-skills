import { Component, Prop } from "@stencil/core";
import { WhirlingBladesValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-whirling-blades",
  styleUrls: ["../../skills.scss", "whirling-blades.scss"],
  shadow: true
})
export class WhirlingBladesComponent {

  @Prop({ reflectToAttr: true }) level: number = WhirlingBladesValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WhirlingBladesValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WhirlingBladesValues.levelRequirement[this.level] }+`,
      `Flurry [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="whirling-blades"></ms-icon>,
      <ms-skill-overlay heading="Whirling Blades"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="whirling-blades"></ms-icon>
        <div slot="description">
          Throw <span>3</span> arcane blades at the closest enemy up to <span>7.5</span> m in front of you,
          dealing <span>{ WhirlingBladesValues.damage[this.level] }%</span> damage.
          This skill attunes with your Flame, Frost, and Storm sigil skills.
          Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
