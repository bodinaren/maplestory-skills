import { Component, Prop } from "@stencil/core";
import { ShadowArts } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-arts",
  styleUrls: ["../../skills.scss", "shadow-arts.scss"],
  shadow: true
})
export class ShadowArtsComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowArts.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="shadow-arts"></ms-icon>,
      <ms-skill-overlay skill={ ShadowArts } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
