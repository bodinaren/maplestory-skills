import { Component, Prop } from "@stencil/core";
import { ShadowBurst } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-burst",
  styleUrls: ["../../skills.scss", "shadow-burst.scss"],
  shadow: true
})
export class ShadowBurstComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowBurst.minLevel;

  render() {
    return [
      <ms-icon name="shadow-burst"></ms-icon>,
      <ms-skill-overlay skill={ ShadowBurst } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
