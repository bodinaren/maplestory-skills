import { Component, Prop } from "@stencil/core";
import { PoisonEdge } from "../../../../global/values/thief";

@Component({
  tag: "ms-poison-edge",
  styleUrls: ["../../skills.scss", "poison-edge.scss"],
  shadow: true
})
export class PoisonEdgeComponent {

  @Prop({ reflectToAttr: true }) level: number = PoisonEdge.minLevel;

  render() {
    return [
      <ms-icon name="poison-edge"></ms-icon>,
      <ms-skill-overlay skill={ PoisonEdge } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
