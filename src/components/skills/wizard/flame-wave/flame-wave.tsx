import { Component, Prop } from "@stencil/core";
import { FlameWave } from "../../../../global/values/wizard";

@Component({
  tag: "ms-flame-wave",
  styleUrls: ["../../skills.scss", "flame-wave.scss"],
  shadow: true
})
export class FlameWaveComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameWave.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlameWave.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlameWave.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="flame-wave"></ms-icon>,
      <ms-skill-overlay heading={ FlameWave.name }
                        element="Fire"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Staff"
                        requirements={ this.getRequirements() }
                        spirit={ 20 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flame-wave"></ms-icon>
        <div slot="description">
          Gather fire energy in your staff to fling a
          flame wave up to <span>8</span> m in front of you,
          dealing <span>{ FlameWave.values.damage[this.level] }%</span> fire damage
          to enemies caught in it and setting them on fire, which deals an
          additional <span>{ FlameWave.values.dot[this.level] }%</span> every second
          for <span>10</span> sec. Consumes <span>20</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
