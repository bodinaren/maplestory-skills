import { Component, Prop } from "@stencil/core";
import { CrossCut } from "../../../../global/values/knight";

@Component({
  tag: "ms-cross-cut",
  styleUrls: ["../../skills.scss", "cross-cut.scss"],
  shadow: true
})
export class CrossCutComponent {

  @Prop({ reflectToAttr: true }) level: number = CrossCut.minLevel;

  render() {
    return [
      <ms-icon name="cross-cut"></ms-icon>,
      <ms-skill-overlay skill={ CrossCut } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
