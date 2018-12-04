import { Component, Prop } from "@stencil/core";
import { Snipe } from "../../../../global/values/archer";

@Component({
  tag: "ms-snipe",
  styleUrls: ["../../skills.scss", "snipe.scss"],
  shadow: true
})
export class SnipeComponent {

  @Prop({ reflectToAttr: true }) level: number = Snipe.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="snipe" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ Snipe } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
