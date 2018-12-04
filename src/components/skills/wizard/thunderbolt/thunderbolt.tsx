import { Component, Prop } from "@stencil/core";
import { Thunderbolt } from "../../../../global/values/wizard";

@Component({
  tag: "ms-thunderbolt",
  styleUrls: ["../../skills.scss", "thunderbolt.scss"],
  shadow: true
})
export class ThunderboltComponent {

  @Prop({ reflectToAttr: true }) level: number = Thunderbolt.minLevel;

  render() {
    return [
      <ms-icon name="thunderbolt"></ms-icon>,
      <ms-skill-overlay skill={ Thunderbolt } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
