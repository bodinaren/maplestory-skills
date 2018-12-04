import { Component, Prop } from "@stencil/core";
import { ElementalPotency } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-elemental-potency",
  styleUrls: ["../../skills.scss", "elemental-potency.scss"],
  shadow: true
})
export class ElementalPotencyComponent {

  @Prop({ reflectToAttr: true }) level: number = ElementalPotency.minLevel;

  render() {
    return [
      <ms-icon name="elemental-potency"></ms-icon>,
      <ms-skill-overlay skill={ ElementalPotency } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
