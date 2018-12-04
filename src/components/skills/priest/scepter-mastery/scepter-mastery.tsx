import { Component, Prop } from "@stencil/core";
import { ScepterMastery } from "../../../../global/values/priest";

@Component({
  tag: "ms-scepter-mastery",
  styleUrls: ["../../skills.scss", "scepter-mastery.scss"],
  shadow: true
})
export class ScepterMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ScepterMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="scepter-mastery"></ms-icon>,
      <ms-skill-overlay skill={ ScepterMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
