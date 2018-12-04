import { Component, Prop } from "@stencil/core";
import { HolyRelic } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-relic",
  styleUrls: ["../../skills.scss", "holy-relic.scss"],
  shadow: true
})
export class HolyRelicComponent {

  @Prop({ reflectToAttr: true }) level: number = HolyRelic.minLevel;

  render() {
    return [
      <ms-icon name="holy-relic"></ms-icon>,
      <ms-skill-overlay skill={ HolyRelic } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
