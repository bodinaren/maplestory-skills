import { Component, Prop } from "@stencil/core";
import { BlastChargeKit } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-blast-charge-kit",
  styleUrls: ["../../skills.scss", "blast-charge-kit.scss"],
  shadow: true
})
export class BlastChargeKitComponent {

  @Prop({ reflectToAttr: true }) level: number = BlastChargeKit.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="blast-charge-kit"></ms-icon>,
      <ms-skill-overlay skill={ BlastChargeKit } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
