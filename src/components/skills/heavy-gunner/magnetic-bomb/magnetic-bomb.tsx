import { Component, Prop } from "@stencil/core";
import { MagneticBomb } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-magnetic-bomb",
  styleUrls: ["../../skills.scss", "magnetic-bomb.scss"],
  shadow: true
})
export class MagneticBombComponent {

  @Prop({ reflectToAttr: true }) level: number = MagneticBomb.minLevel;

  render() {
    return [
      <ms-icon name="magnetic-bomb"></ms-icon>,
      <ms-skill-overlay skill={ MagneticBomb } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
