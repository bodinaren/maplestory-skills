import { Component, Prop } from "@stencil/core";
import { MindBreaker } from "../../../../global/values/thief";

@Component({
  tag: "ms-mind-breaker",
  styleUrls: ["../../skills.scss", "mind-breaker.scss"],
  shadow: true
})
export class MindBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = MindBreaker.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="mind-breaker"></ms-icon>,
      <ms-skill-overlay skill={ MindBreaker } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
