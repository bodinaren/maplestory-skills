import { Component, Prop } from "@stencil/core";
import { ShieldToss } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-toss",
  styleUrls: ["../../skills.scss", "shield-toss.scss"],
  shadow: true
})
export class ShieldTossComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldToss.minLevel;

  render() {
    return [
      <ms-icon name="shield-toss"></ms-icon>,
      <ms-skill-overlay skill={ ShieldToss } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
