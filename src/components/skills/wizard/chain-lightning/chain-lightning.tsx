import { Component, Prop } from "@stencil/core";
import { ChainLightning } from "../../../../global/values/wizard";

@Component({
  tag: "ms-chain-lightning",
  styleUrls: ["../../skills.scss", "chain-lightning.scss"],
  shadow: true
})
export class ChainLightningComponent {

  @Prop({ reflectToAttr: true }) level: number = ChainLightning.minLevel;

  render() {
    return [
      <ms-icon name="chain-lightning"></ms-icon>,
      <ms-skill-overlay skill={ ChainLightning } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
