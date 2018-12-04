import { Component, Prop } from "@stencil/core";
import { ArrowStorm } from "../../../../global/values/archer";

@Component({
  tag: "ms-arrow-storm",
  styleUrls: ["../../skills.scss", "arrow-storm.scss"],
  shadow: true
})
export class ArrowStormComponent {

  @Prop({ reflectToAttr: true }) level: number = ArrowStorm.minLevel;

  render() {
    return [
      <ms-icon name="arrow-storm"></ms-icon>,
      <ms-skill-overlay skill={ ArrowStorm } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
