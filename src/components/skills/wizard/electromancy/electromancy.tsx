import { Component, Prop } from "@stencil/core";
import { Electromancy } from "../../../../global/values/wizard";

@Component({
  tag: "ms-electromancy",
  styleUrls: ["../../skills.scss", "electromancy.scss"],
  shadow: true
})
export class ElectromancyComponent {

  @Prop({ reflectToAttr: true }) level: number = Electromancy.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="electromancy"></ms-icon>,
      <ms-skill-overlay skill={ Electromancy } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
