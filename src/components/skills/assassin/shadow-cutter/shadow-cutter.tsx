import { Component, Prop } from "@stencil/core";
import { ShadowCutter } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-cutter",
  styleUrls: ["../../skills.scss", "shadow-cutter.scss"],
  shadow: true
})
export class ShadowCutterComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowCutter.minLevel;

  render() {
    return [
      <ms-icon name="shadow-cutter"></ms-icon>,
      <ms-skill-overlay skill={ ShadowCutter } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
