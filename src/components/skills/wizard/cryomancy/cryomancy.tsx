import { Component, Prop } from "@stencil/core";
import { Cryomancy } from "../../../../global/values/wizard";

@Component({
  tag: "ms-cryomancy",
  styleUrls: ["../../skills.scss", "cryomancy.scss"],
  shadow: true
})
export class CryomancyComponent {

  @Prop({ reflectToAttr: true }) level: number = Cryomancy.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="cryomancy"></ms-icon>,
      <ms-skill-overlay skill={ Cryomancy } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
