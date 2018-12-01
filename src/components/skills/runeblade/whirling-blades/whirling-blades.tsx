import { Component, Prop } from "@stencil/core";
import { WhirlingBlades } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-whirling-blades",
  styleUrls: ["../../skills.scss", "whirling-blades.scss"],
  shadow: true
})
export class WhirlingBladesComponent {

  @Prop({ reflectToAttr: true }) level: number = WhirlingBlades.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WhirlingBlades.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WhirlingBlades.levelRequirement[this.level] }+`,
      `Flurry [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="whirling-blades"></ms-icon>,
      <ms-skill-overlay heading={ WhirlingBlades.name }
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
          dealing <span>{ WhirlingBlades.values.damage[this.level] }%</span> damage.
          This skill attunes with your Flame, Frost, and Storm sigil skills.
          Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
