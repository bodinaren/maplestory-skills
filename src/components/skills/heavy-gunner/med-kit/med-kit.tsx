import { Component, Prop } from "@stencil/core";
import { MedKit } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-med-kit",
  styleUrls: ["../../skills.scss", "med-kit.scss"],
  shadow: true
})
export class MedKitComponent {

  @Prop({ reflectToAttr: true }) level: number = MedKit.minLevel;

  render() {
    return [
      <ms-icon name="med-kit"></ms-icon>,
      <ms-skill-overlay skill={ MedKit } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
