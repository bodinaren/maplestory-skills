import { Component, Prop } from "@stencil/core";
import { ShieldOfTheArchon } from "../../../../global/values/priest";

@Component({
  tag: "ms-shield-of-the-archon",
  styleUrls: ["../../skills.scss", "shield-of-the-archon.scss"],
  shadow: true
})
export class ShieldOfTheArchonComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldOfTheArchon.minLevel;

  render() {
    return [
      <ms-icon name="shield-of-the-archon"></ms-icon>,
      <ms-skill-overlay skill={ ShieldOfTheArchon } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
