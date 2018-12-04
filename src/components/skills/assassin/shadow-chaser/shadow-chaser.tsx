import { Component, Prop } from "@stencil/core";
import { ShadowChaser } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-chaser",
  styleUrls: ["../../skills.scss", "shadow-chaser.scss"],
  shadow: true
})
export class ShadowChaserComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowChaser.minLevel;

  render() {
    return [
      <ms-icon name="shadow-chaser" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ ShadowChaser } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
