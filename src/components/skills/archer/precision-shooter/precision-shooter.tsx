import { Component, Prop } from "@stencil/core";
import { PrecisionShooter } from "../../../../global/values/archer";

@Component({
  tag: "ms-precision-shooter",
  styleUrls: ["../../skills.scss", "precision-shooter.scss"],
  shadow: true
})
export class PrecisionShooterComponent {

  @Prop({ reflectToAttr: true }) level: number = PrecisionShooter.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="precision-shooter"></ms-icon>,
      <ms-skill-overlay skill={ PrecisionShooter } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
