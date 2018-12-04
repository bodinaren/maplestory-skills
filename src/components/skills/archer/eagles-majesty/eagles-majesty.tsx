import { Component, Prop } from "@stencil/core";
import { EaglesMajesty } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagles-majesty",
  styleUrls: ["../../skills.scss", "eagles-majesty.scss"],
  shadow: true
})
export class EaglesMajestyComponent {

  @Prop({ reflectToAttr: true }) level: number = EaglesMajesty.minLevel;

  render() {
    return [
      <ms-icon name="eagles-majesty"></ms-icon>,
      <ms-skill-overlay skill={ EaglesMajesty } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
