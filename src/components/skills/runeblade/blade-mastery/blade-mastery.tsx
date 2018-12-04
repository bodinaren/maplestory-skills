import { Component, Prop } from "@stencil/core";
import { BladeMastery } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-blade-mastery",
  styleUrls: ["../../skills.scss", "blade-mastery.scss"],
  shadow: true
})
export class BladeMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = BladeMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="blade-mastery"></ms-icon>,
      <ms-skill-overlay skill={ BladeMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
