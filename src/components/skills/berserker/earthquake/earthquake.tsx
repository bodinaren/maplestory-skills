import { Component, Prop } from "@stencil/core";
import { Earthquake } from "../../../../global/values/berserker";

@Component({
  tag: "ms-earthquake",
  styleUrls: ["../../skills.scss", "earthquake.scss"],
  shadow: true
})
export class EarthquakeComponent {

  @Prop({ reflectToAttr: true }) level: number = Earthquake.minLevel;

  render() {
    return [
      <ms-icon name="earthquake"></ms-icon>,
      <ms-skill-overlay skill={ Earthquake } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
