import { Component, Prop } from "@stencil/core";
import { DarkBreaker } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-breaker",
  styleUrls: ["../../skills.scss", "dark-breaker.scss"],
  shadow: true
})
export class DarkBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkBreaker.minLevel;

  render() {
    return [
      <ms-icon name="dark-breaker"></ms-icon>,
      <ms-skill-overlay skill={ DarkBreaker } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
