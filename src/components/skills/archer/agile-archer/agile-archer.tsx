import { Component, Prop } from "@stencil/core";
import { AgileArcher } from "../../../../global/values/archer";

@Component({
  tag: "ms-agile-archer",
  styleUrls: ["../../skills.scss", "agile-archer.scss"],
  shadow: true
})
export class AgileArcherComponent {

  @Prop({ reflectToAttr: true }) level: number = AgileArcher.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name={ AgileArcher.attr }></ms-icon>,
      <ms-skill-overlay skill={ AgileArcher } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
