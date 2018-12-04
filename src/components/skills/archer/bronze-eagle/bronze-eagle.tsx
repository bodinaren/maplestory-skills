import { Component, Prop } from "@stencil/core";
import { BronzeEagle } from "../../../../global/values/archer";

@Component({
  tag: "ms-bronze-eagle",
  styleUrls: ["../../skills.scss", "bronze-eagle.scss"],
  shadow: true
})
export class BronzeEagleComponent {

  @Prop({ reflectToAttr: true }) level: number = BronzeEagle.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="bronze-eagle"></ms-icon>,
      <ms-skill-overlay skill={ BronzeEagle } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
