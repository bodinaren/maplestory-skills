import { Component, Prop } from "@stencil/core";
import { WardingRune } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-warding-rune",
  styleUrls: ["../../skills.scss", "warding-rune.scss"],
  shadow: true
})
export class WardingRuneComponent {

  @Prop({ reflectToAttr: true }) level: number = WardingRune.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = WardingRune.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ WardingRune.levelRequirement[this.level] }+`,
      `Gravity Rune [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="warding-rune"></ms-icon>,
      <ms-skill-overlay heading={ WardingRune.name }
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="warding-rune"></ms-icon>
        <div slot="description">
          Summon a shield that lasts <span>9</span> sec, increasing physical resistance and magic resistance
          by <span>{ WardingRune.values.resistance[this.level] }%</span>.
          This skill attunes with your Flame, Frost, and Storm sigil skills.
        </div>
      </ms-skill-overlay>
    ];
  }
}
