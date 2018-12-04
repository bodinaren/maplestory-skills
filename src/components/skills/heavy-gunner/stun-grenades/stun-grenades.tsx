import { Component, Prop } from "@stencil/core";
import { StunGrenades } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-stun-grenades",
  styleUrls: ["../../skills.scss", "stun-grenades.scss"],
  shadow: true
})
export class StunGrenadesComponent {

  @Prop({ reflectToAttr: true }) level: number = StunGrenades.minLevel;

  render() {
    return [
      <ms-icon name="stun-grenades"></ms-icon>,
      <ms-skill-overlay skill={ StunGrenades } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
