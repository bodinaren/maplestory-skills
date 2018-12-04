import { Component, Prop } from "@stencil/core";
import { ScourgingWave } from "../../../../global/values/priest";

@Component({
  tag: "ms-scourging-wave",
  styleUrls: ["../../skills.scss", "scourging-wave.scss"],
  shadow: true
})
export class ScourgingWaveComponent {

  @Prop({ reflectToAttr: true }) level: number = ScourgingWave.minLevel;

  render() {
    return [
      <ms-icon name="scourging-wave"></ms-icon>,
      <ms-skill-overlay skill={ ScourgingWave } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
