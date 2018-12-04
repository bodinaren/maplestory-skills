import { Component, Prop } from "@stencil/core";
import { SharpEyes } from "../../../../global/values/archer";

@Component({
  tag: "ms-sharp-eyes",
  styleUrls: ["../../skills.scss", "sharp-eyes.scss"],
  shadow: true
})
export class SharpEyesComponent {

  @Prop({ reflectToAttr: true }) level: number = SharpEyes.minLevel;

  render() {
    return [
      <ms-icon name="sharp-eyes"></ms-icon>,
      <ms-skill-overlay skill={ SharpEyes } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
