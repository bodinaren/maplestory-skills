import { Component, Prop } from "@stencil/core";
import { XSlash } from "../../../../global/values/berserker";

@Component({
  tag: "ms-x-slash",
  styleUrls: ["../../skills.scss", "x-slash.scss"],
  shadow: true
})
export class XSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = XSlash.minLevel;

  render() {
    return [
      <ms-icon name="x-slash"></ms-icon>,
      <ms-skill-overlay skill={ XSlash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
