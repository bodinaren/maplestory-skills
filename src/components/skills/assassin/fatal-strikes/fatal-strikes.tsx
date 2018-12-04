import { Component, Prop } from "@stencil/core";
import { FatalStrikes } from "../../../../global/values/assassin";

@Component({
  tag: "ms-fatal-strikes",
  styleUrls: ["../../skills.scss", "fatal-strikes.scss"],
  shadow: true
})
export class FatalStrikesComponent {

  @Prop({ reflectToAttr: true }) level: number = FatalStrikes.minLevel;

  render() {
    return [
      <ms-icon name="fatal-strikes"></ms-icon>,
      <ms-skill-overlay skill={ FatalStrikes } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
