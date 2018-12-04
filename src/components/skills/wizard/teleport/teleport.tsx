import { Component, Prop } from "@stencil/core";
import { Teleport } from "../../../../global/values/wizard";

@Component({
  tag: "ms-teleport",
  styleUrls: ["../../skills.scss", "teleport.scss"],
  shadow: true
})
export class TeleportComponent {

  @Prop({ reflectToAttr: true }) level: number = Teleport.minLevel;

  render() {
    return [
      <ms-icon name="teleport"></ms-icon>,
      <ms-skill-overlay skill={ Teleport } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
