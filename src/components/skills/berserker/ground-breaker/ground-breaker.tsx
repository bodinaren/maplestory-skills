import { Component, Prop } from "@stencil/core";
import { GroundBreaker } from "../../../../global/values/berserker";

@Component({
  tag: "ms-ground-breaker",
  styleUrls: ["../../skills.scss", "ground-breaker.scss"],
  shadow: true
})
export class GroundBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = GroundBreaker.minLevel;

  render() {
    return [
      <ms-icon name="ground-breaker"></ms-icon>,
      <ms-skill-overlay skill={ GroundBreaker } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
