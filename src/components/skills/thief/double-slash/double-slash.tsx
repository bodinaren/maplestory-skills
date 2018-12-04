import { Component, Prop } from "@stencil/core";
import { DoubleSlash } from "../../../../global/values/thief";

@Component({
  tag: "ms-double-slash",
  styleUrls: ["../../skills.scss", "double-slash.scss"],
  shadow: true
})
export class DoubleSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = DoubleSlash.minLevel;

  render() {
    return [
      <ms-icon name="double-slash"></ms-icon>,
      <ms-skill-overlay skill={ DoubleSlash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
