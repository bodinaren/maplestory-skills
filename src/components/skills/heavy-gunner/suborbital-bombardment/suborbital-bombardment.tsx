import { Component, Prop } from "@stencil/core";
import { SuborbitalBombardment } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-suborbital-bombardment",
  styleUrls: ["../../skills.scss", "suborbital-bombardment.scss"],
  shadow: true
})
export class SuborbitalBombardmentComponent {

  @Prop({ reflectToAttr: true }) level: number = SuborbitalBombardment.minLevel;

  render() {
    return [
      <ms-icon name="suborbital-bombardment"></ms-icon>,
      <ms-skill-overlay skill={ SuborbitalBombardment } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
