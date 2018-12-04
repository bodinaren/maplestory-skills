import { Component, Prop } from "@stencil/core";
import { HeavenlyWings } from "../../../../global/values/priest";

@Component({
  tag: "ms-heavenly-wings",
  styleUrls: ["../../skills.scss", "heavenly-wings.scss"],
  shadow: true
})
export class HeavenlyWingsComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = HeavenlyWings.minLevel;

  render() {
    return [
      <ms-icon slot="icon" name="heavenly-wings"></ms-icon>,
      <ms-skill-overlay skill={ HeavenlyWings } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
