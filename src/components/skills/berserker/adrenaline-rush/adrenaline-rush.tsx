import { Component, Prop } from "@stencil/core";
import { AdrenalineRush } from "../../../../global/values/berserker";

@Component({
  tag: "ms-adrenaline-rush",
  styleUrls: ["../../skills.scss", "adrenaline-rush.scss"],
  shadow: true
})
export class AdrenalineRushComponent {

  @Prop({ reflectToAttr: true }) level: number = AdrenalineRush.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="adrenaline-rush"></ms-icon>,
      <ms-skill-overlay skill={ AdrenalineRush } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
