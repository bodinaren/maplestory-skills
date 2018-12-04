import { Component, Prop } from "@stencil/core";
import { ArrowStream } from "../../../../global/values/archer";

@Component({
  tag: "ms-arrow-stream",
  styleUrls: ["../../skills.scss", "arrow-stream.scss"],
  shadow: true
})
export class ArrowStreamComponent {

  @Prop({ reflectToAttr: true }) level: number = ArrowStream.minLevel;

  render() {
    return [
      <ms-icon name="arrow-stream"></ms-icon>,
      <ms-skill-overlay level={ this.level } skill={ ArrowStream }></ms-skill-overlay>,
    ];
  }
}
