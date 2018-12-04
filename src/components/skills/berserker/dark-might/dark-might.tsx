import { Component, Prop } from "@stencil/core";
import { DarkMight } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-might",
  styleUrls: ["../../skills.scss", "dark-might.scss"],
  shadow: true
})
export class DarkMightComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkMight.minLevel;

  render() {
    return [
      <ms-icon name="dark-might"></ms-icon>,
      <ms-skill-overlay skill={ DarkMight } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
