import { Component, Prop } from "@stencil/core";
import { ArrowBarrage } from "../../../../global/values/archer";

@Component({
  tag: "ms-arrow-barrage",
  styleUrls: ["../../skills.scss", "arrow-barrage.scss"],
  shadow: true
})
export class ArrowBarrageComponent {

  @Prop({ reflectToAttr: true }) level: number = ArrowBarrage.minLevel;

  render() {
    return [
      <ms-icon name="arrow-barrage"></ms-icon>,
      <ms-skill-overlay skill={ ArrowBarrage } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
