import { Component, Prop } from "@stencil/core";
import { ArcaneBlast } from "../../../../global/values/wizard";

@Component({
  tag: "ms-arcane-blast",
  styleUrls: ["../../skills.scss", "arcane-blast.scss"],
  shadow: true
})
export class ArcaneBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = ArcaneBlast.minLevel;

  render() {
    return [
      <ms-icon name="arcane-blast"></ms-icon>,
      <ms-skill-overlay skill={ ArcaneBlast } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
