import { Component, Prop } from "@stencil/core";
import { ElectricBlast } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-electric-blast",
  styleUrls: ["../../skills.scss", "electric-blast.scss"],
  shadow: true
})
export class ElectricBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = ElectricBlast.minLevel;

  render() {
    return [
      <ms-icon name="electric-blast"></ms-icon>,
      <ms-skill-overlay skill={ ElectricBlast } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
