import { Component, Prop } from "@stencil/core";
import { PoisonVial } from "../../../../global/values/thief";

@Component({
  tag: "ms-poison-vial",
  styleUrls: ["../../skills.scss", "poison-vial.scss"],
  shadow: true
})
export class PoisonVialComponent {

  @Prop({ reflectToAttr: true }) level: number = PoisonVial.minLevel;

  render() {
    return [
      <ms-icon name="poison-vial"></ms-icon>,
      <ms-skill-overlay skill={ PoisonVial } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
