import { Component, Prop } from "@stencil/core";
import { SpiritThief } from "../../../../global/values/thief";

@Component({
  tag: "ms-spirit-thief",
  styleUrls: ["../../skills.scss", "spirit-thief.scss"],
  shadow: true
})
export class SpiritThiefComponent {

  @Prop({ reflectToAttr: true }) level: number = SpiritThief.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="spirit-thief" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ SpiritThief } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
