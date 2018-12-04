import { Component, Prop } from "@stencil/core";
import { SteadfastFaith } from "../../../../global/values/priest";

@Component({
  tag: "ms-steadfast-faith",
  styleUrls: ["../../skills.scss", "steadfast-faith.scss"],
  shadow: true
})
export class SteadfastFaithComponent {

  @Prop({ reflectToAttr: true }) level: number = SteadfastFaith.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="steadfast-faith" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ SteadfastFaith } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
