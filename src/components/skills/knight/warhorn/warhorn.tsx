import { Component, Prop } from "@stencil/core";
import { Warhorn } from "../../../../global/values/knight";

@Component({
  tag: "ms-warhorn",
  styleUrls: ["../../skills.scss", "warhorn.scss"],
  shadow: true
})
export class WarhornComponent {

  @Prop({ reflectToAttr: true }) level: number = Warhorn.minLevel;

  render() {
    return [
      <ms-icon name="warhorn"></ms-icon>,
      <ms-skill-overlay skill={ Warhorn } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
