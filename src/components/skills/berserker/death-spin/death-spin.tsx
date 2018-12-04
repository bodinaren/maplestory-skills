import { Component, Prop } from "@stencil/core";
import { DeathSpin } from "../../../../global/values/berserker";

@Component({
  tag: "ms-death-spin",
  styleUrls: ["../../skills.scss", "death-spin.scss"],
  shadow: true
})
export class DeathSpinComponent {

  @Prop({ reflectToAttr: true }) level: number = DeathSpin.minLevel;

  render() {
    return [
      <ms-icon name="death-spin"></ms-icon>,
      <ms-skill-overlay skill={ DeathSpin } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
