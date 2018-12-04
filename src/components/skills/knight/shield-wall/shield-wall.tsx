import { Component, Prop } from "@stencil/core";
import { ShieldWall } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-wall",
  styleUrls: ["../../skills.scss", "shield-wall.scss"],
  shadow: true
})
export class ShieldWallComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldWall.minLevel;

  render() {
    return [
      <ms-icon name="shield-wall"></ms-icon>,
      <ms-skill-overlay skill={ ShieldWall } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
