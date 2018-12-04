import { Component, Prop } from "@stencil/core";
import { HomingMissiles } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-homing-missiles",
  styleUrls: ["../../skills.scss", "homing-missiles.scss"],
  shadow: true
})
export class HomingMissilesComponent {

  @Prop({ reflectToAttr: true }) level: number = HomingMissiles.minLevel;

  render() {
    return [
      <ms-icon name="homing-missiles"></ms-icon>,
      <ms-skill-overlay skill={ HomingMissiles } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
