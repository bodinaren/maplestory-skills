import { Component, Prop } from "@stencil/core";
import { GatlingFire } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-gatling-fire",
  styleUrls: ["../../skills.scss", "gatling-fire.scss"],
  shadow: true
})
export class GatlingFireComponent {

  @Prop({ reflectToAttr: true }) level: number = GatlingFire.minLevel;

  render() {
    return [
      <ms-icon name="gatling-fire"></ms-icon>,
      <ms-skill-overlay skill={ GatlingFire } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
