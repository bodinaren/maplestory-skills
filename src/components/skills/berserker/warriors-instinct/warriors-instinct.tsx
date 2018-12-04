import { Component, Prop } from "@stencil/core";
import { WarriorsInstinct } from "../../../../global/values/berserker";

@Component({
  tag: "ms-warriors-instinct",
  styleUrls: ["../../skills.scss", "warriors-instinct.scss"],
  shadow: true
})
export class WarriorsInstinctComponent {

  @Prop({ reflectToAttr: true }) level: number = WarriorsInstinct.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="warriors-instinct"></ms-icon>,
      <ms-skill-overlay skill={ WarriorsInstinct } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
