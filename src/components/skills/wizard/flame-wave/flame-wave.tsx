import { Component, Prop } from "@stencil/core";
import { FlameWaveValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-flame-wave",
  styleUrls: ["../../skills.scss", "flame-wave.scss"],
  shadow: true
})
export class FlameWaveComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameWaveValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlameWaveValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlameWaveValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="flame-wave"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flame-wave"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
