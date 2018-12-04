import { Component, Prop } from "@stencil/core";
import { WhirlingBlades } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-whirling-blades",
  styleUrls: ["../../skills.scss", "whirling-blades.scss"],
  shadow: true
})
export class WhirlingBladesComponent {

  @Prop({ reflectToAttr: true }) level: number = WhirlingBlades.minLevel;

  render() {
    return [
      <ms-icon name="whirling-blades"></ms-icon>,
      <ms-skill-overlay skill={ WhirlingBlades } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
