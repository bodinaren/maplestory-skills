import { Component, Prop } from "@stencil/core";
import { Impact } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-impact",
  styleUrls: ["../../skills.scss", "impact.scss"],
  shadow: true
})
export class ImpactComponent {

  @Prop({ reflectToAttr: true }) level: number = Impact.minLevel;

  render() {
    return [
      <ms-icon name="impact"></ms-icon>,
      <ms-skill-overlay skill={ Impact } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
