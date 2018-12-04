import { Component, Prop } from "@stencil/core";
import { HolyBlast } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-blast",
  styleUrls: ["../../skills.scss", "holy-blast.scss"],
  shadow: true
})
export class HolyBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = HolyBlast.minLevel;

  render() {
    return [
      <ms-icon name="holy-blast"></ms-icon>,
      <ms-skill-overlay skill={ HolyBlast } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
