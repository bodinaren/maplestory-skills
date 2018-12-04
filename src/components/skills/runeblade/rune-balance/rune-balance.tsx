import { Component, Prop } from "@stencil/core";
import { RuneBalance } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-rune-balance",
  styleUrls: ["../../skills.scss", "rune-balance.scss"],
  shadow: true
})
export class RuneBalanceComponent {

  @Prop({ reflectToAttr: true }) level: number = RuneBalance.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="rune-balance" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ RuneBalance } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
