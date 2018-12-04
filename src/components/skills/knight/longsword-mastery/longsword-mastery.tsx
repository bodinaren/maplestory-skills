import { Component, Prop } from "@stencil/core";
import { LongswordMastery } from "../../../../global/values/knight";

@Component({
  tag: "ms-longsword-mastery",
  styleUrls: ["../../skills.scss", "longsword-mastery.scss"],
  shadow: true
})
export class LongswordMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = LongswordMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="longsword-mastery"></ms-icon>,
      <ms-skill-overlay skill={ LongswordMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
