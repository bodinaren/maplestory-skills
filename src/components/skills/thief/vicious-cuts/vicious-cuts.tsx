import { Component, Prop } from "@stencil/core";
import { ViciousCuts } from "../../../../global/values/thief";

@Component({
  tag: "ms-vicious-cuts",
  styleUrls: ["../../skills.scss", "vicious-cuts.scss"],
  shadow: true
})
export class ViciousCutsComponent {

  @Prop({ reflectToAttr: true }) level: number = ViciousCuts.minLevel;

  render() {
    return [
      <ms-icon name="vicious-cuts"></ms-icon>,
      <ms-skill-overlay skill={ ViciousCuts } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
