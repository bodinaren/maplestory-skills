import { Component, Prop } from "@stencil/core";
import { IronDefense } from "../../../../global/values/knight";

@Component({
  tag: "ms-iron-defense",
  styleUrls: ["../../skills.scss", "iron-defense.scss"],
  shadow: true
})
export class IronDefenseComponent {

  @Prop({ reflectToAttr: true }) level: number = IronDefense.minLevel;

  render() {
    return [
      <ms-icon name="iron-defense" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ IronDefense } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
