import { Component, Prop } from "@stencil/core";
import { EchoingBladeValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-echoing-blade",
  styleUrls: ["../../skills.scss", "echoing-blade.scss"],
  shadow: true
})
export class EchoingBladeComponent {

  @Prop({ reflectToAttr: true }) level: number = EchoingBladeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EchoingBladeValues.maxLevel;

  getRequirements(): string[] {
    if (EchoingBladeValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ EchoingBladeValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="echoing-blade"></ms-icon>,
      <ms-skill-overlay heading="Echoing Blade"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        spirit={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="echoing-blade"></ms-icon>
        <div slot="description">
          Summon arcane echoes of your blade,
          dealing <span>{ EchoingBladeValues.damage[this.level] }%</span> damage <span>7</span> times
          to <span>8</span> enemies up to <span>3</span> m in front of you.
          The echoes fade when you perform another action.
          This skill attunes with your Flame, Frost, and Storm Sigil skills.
          Consumes <span>30</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
