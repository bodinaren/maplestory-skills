import { Component, Prop } from "@stencil/core";
import { Haste } from "../../../../global/values/thief";

@Component({
  tag: "ms-haste",
  styleUrls: ["../../skills.scss", "haste.scss"],
  shadow: true
})
export class HasteComponent {

  @Prop({ reflectToAttr: true }) level: number = Haste.minLevel;

  render() {
    return [
      <ms-icon name="haste"></ms-icon>,
      <ms-skill-overlay skill={ Haste } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
