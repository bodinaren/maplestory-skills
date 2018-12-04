import { Component, Prop } from "@stencil/core";
import { FlameWave } from "../../../../global/values/wizard";

@Component({
  tag: "ms-flame-wave",
  styleUrls: ["../../skills.scss", "flame-wave.scss"],
  shadow: true
})
export class FlameWaveComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameWave.minLevel;

  render() {
    return [
      <ms-icon name="flame-wave"></ms-icon>,
      <ms-skill-overlay skill={ FlameWave } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
