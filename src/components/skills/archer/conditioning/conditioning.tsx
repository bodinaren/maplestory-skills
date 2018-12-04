import { Component, Prop } from "@stencil/core";
import { Conditioning } from "../../../../global/values/archer";

@Component({
  tag: "ms-conditioning",
  styleUrls: ["../../skills.scss", "conditioning.scss"],
  shadow: true
})
export class ConditioningComponent {

  @Prop({ reflectToAttr: true }) level: number = Conditioning.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="conditioning"></ms-icon>,
      <ms-skill-overlay skill={ Conditioning } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
