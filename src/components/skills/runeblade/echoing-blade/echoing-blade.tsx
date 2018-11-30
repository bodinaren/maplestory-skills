import { Component, Prop } from "@stencil/core";
import { EchoingBlade } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-echoing-blade",
  styleUrls: ["../../skills.scss", "echoing-blade.scss"],
  shadow: true
})
export class EchoingBladeComponent {

  @Prop({ reflectToAttr: true }) level: number = EchoingBlade.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EchoingBlade.maxLevel;

  getRequirements(): string[] {
    if (EchoingBlade.levelRequirement[this.level] > 0) {
      return [
        `Level ${ EchoingBlade.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="echoing-blade"></ms-icon>,
      <ms-skill-overlay heading={ EchoingBlade.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        spirit={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="echoing-blade"></ms-icon>
        <div slot="description">
          Summon arcane echoes of your blade,
          dealing <span>{ EchoingBlade.values.damage[this.level] }%</span> damage <span>7</span> times
          to <span>8</span> enemies up to <span>3</span> m in front of you.
          The echoes fade when you perform another action.
          This skill attunes with your Flame, Frost, and Storm Sigil skills.
          Consumes <span>30</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
