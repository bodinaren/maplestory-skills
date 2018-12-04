import { Component, Prop } from "@stencil/core";
import { Sanctuary } from "../../../../global/values/priest";

@Component({
  tag: "ms-sanctuary",
  styleUrls: ["../../skills.scss", "sanctuary.scss"],
  shadow: true
})
export class SanctuaryComponent {

  @Prop({ reflectToAttr: true }) level: number = Sanctuary.minLevel;

  render() {
    return [
      <ms-icon name="sanctuary"></ms-icon>,
      <ms-skill-overlay skill={ Sanctuary } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
