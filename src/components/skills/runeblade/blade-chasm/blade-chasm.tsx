import { Component, Prop } from "@stencil/core";
import { BladeChasm } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-blade-chasm",
  styleUrls: ["../../skills.scss", "blade-chasm.scss"],
  shadow: true
})
export class BladeChasmComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeChasm.minLevel;

  render() {
    return [
      <ms-icon name="blade-chasm"></ms-icon>,
      <ms-skill-overlay skill={ BladeChasm } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
