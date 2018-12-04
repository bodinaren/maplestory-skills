import { Component, Prop } from "@stencil/core";
import { InhumanEndurance } from "../../../../global/values/berserker";

@Component({
  tag: "ms-inhuman-endurance",
  styleUrls: ["../../skills.scss", "inhuman-endurance.scss"],
  shadow: true
})
export class InhumanEnduranceComponent {

  @Prop({ reflectToAttr: true }) level: number = InhumanEndurance.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="inhuman-endurance"></ms-icon>,
      <ms-skill-overlay skill={ InhumanEndurance } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
