import { Component, Prop } from "@stencil/core";
import { BladeChasm } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-blade-chasm",
  styleUrls: ["../../skills.scss", "blade-chasm.scss"],
  shadow: true
})
export class BladeChasmComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeChasm.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BladeChasm.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BladeChasm.levelRequirement[this.level] }+`,
      `Rune Focus [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="blade-chasm"></ms-icon>,
      <ms-skill-overlay heading={ BladeChasm.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        spirit={ 40 }
                        cooldown={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="blade-chasm"></ms-icon>
        <div slot="description">
          Charge forward <span>7.5</span> m, splitting the ground with your blade to
          deal <span>{ BladeChasm.values.damage[this.level] }%</span> damage
          to <span>5</span> enemies in your path. The split explodes,
          dealing <span>{ BladeChasm.values.aoe[this.level] }%</span> damage
          to <span>8</span> enemies in range.
          This skill attunes with your Flame, Frost, and Storm Sigil skills.
          Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
