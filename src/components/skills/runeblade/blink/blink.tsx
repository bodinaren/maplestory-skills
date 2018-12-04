import { Component, Prop } from "@stencil/core";
import { Blink } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-blink",
  styleUrls: ["../../skills.scss", "blink.scss"],
  shadow: true
})
export class BlinkComponent {

  @Prop({ reflectToAttr: true }) level: number = Blink.minLevel;

  render() {
    return [
      <ms-icon name="blink"></ms-icon>,
      <ms-skill-overlay skill={ Blink } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
