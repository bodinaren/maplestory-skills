import { Component, Prop } from "@stencil/core";
import { MindStealer } from "../../../../global/values/thief";

@Component({
  tag: "ms-mind-stealer",
  styleUrls: ["../../skills.scss", "mind-stealer.scss"],
  shadow: true
})
export class MindStealerComponent {

  @Prop({ reflectToAttr: true }) level: number = MindStealer.minLevel;

  render() {
    return [
      <ms-icon name="mind-stealer"></ms-icon>,
      <ms-skill-overlay skill={ MindStealer } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
