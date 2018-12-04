import { Component, Prop } from "@stencil/core";
import { FocusSeal } from "../../../../global/values/wizard";

@Component({
  tag: "ms-focus-seal",
  styleUrls: ["../../skills.scss", "focus-seal.scss"],
  shadow: true
})
export class FocusSealComponent {

  @Prop({ reflectToAttr: true }) level: number = FocusSeal.minLevel;

  render() {
    return [
      <ms-icon name="focus-seal"></ms-icon>,
      <ms-skill-overlay skill={ FocusSeal } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
