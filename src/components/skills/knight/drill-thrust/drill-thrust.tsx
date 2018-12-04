import { Component, Prop } from "@stencil/core";
import { DrillThrust } from "../../../../global/values/knight";

@Component({
  tag: "ms-drill-thrust",
  styleUrls: ["../../skills.scss", "drill-thrust.scss"],
  shadow: true
})
export class DrillThrustComponent {

  @Prop({ reflectToAttr: true }) level: number = DrillThrust.minLevel;

  render() {
    return [
      <ms-icon name="drill-thrust"></ms-icon>,
      <ms-skill-overlay skill={ DrillThrust } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
