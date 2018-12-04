import { Component, Prop } from "@stencil/core";
import { HolySymbol } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-symbol",
  styleUrls: ["../../skills.scss", "holy-symbol.scss"],
  shadow: true
})
export class HolySymbolComponent {

  @Prop({ reflectToAttr: true }) level: number = HolySymbol.minLevel;

  render() {
    return [
      <ms-icon name="holy-symbol"></ms-icon>,
      <ms-skill-overlay skill={ HolySymbol } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
