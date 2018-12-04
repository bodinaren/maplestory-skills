import { Component, Prop } from "@stencil/core";
import { IceStorm } from "../../../../global/values/wizard";

@Component({
  tag: "ms-ice-storm",
  styleUrls: ["../../skills.scss", "ice-storm.scss"],
  shadow: true
})
export class IceStormComponent {

  @Prop({ reflectToAttr: true }) level: number = IceStorm.minLevel;

  render() {
    return [
      <ms-icon name="ice-storm"></ms-icon>,
      <ms-skill-overlay skill={ IceStorm } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
