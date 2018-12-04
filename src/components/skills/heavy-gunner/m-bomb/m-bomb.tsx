import { Component, Prop } from "@stencil/core";
import { MBomb } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-m-bomb",
  styleUrls: ["../../skills.scss", "m-bomb.scss"],
  shadow: true
})
export class MBombComponent {

  @Prop({ reflectToAttr: true }) level: number = MBomb.minLevel;

  render() {
    return [
      <ms-icon name="m-bomb"></ms-icon>,
      <ms-skill-overlay skill={ MBomb } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
