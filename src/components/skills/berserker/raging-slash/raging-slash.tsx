import { Component, Prop } from "@stencil/core";
import { RagingSlash } from "../../../../global/values/berserker";

@Component({
  tag: "ms-raging-slash",
  styleUrls: ["../../skills.scss", "raging-slash.scss"],
  shadow: true
})
export class RagingSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = RagingSlash.minLevel;

  render() {
    return [
      <ms-icon name="raging-slash"></ms-icon>,
      <ms-skill-overlay skill={ RagingSlash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
