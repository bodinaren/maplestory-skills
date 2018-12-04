import { Component, Prop } from "@stencil/core";
import { DeepWounds } from "../../../../global/values/berserker";

@Component({
  tag: "ms-deep-wounds",
  styleUrls: ["../../skills.scss", "deep-wounds.scss"],
  shadow: true
})
export class DeepWoundsComponent {

  @Prop({ reflectToAttr: true }) level: number = DeepWounds.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="deep-wounds"></ms-icon>,
      <ms-skill-overlay skill={ DeepWounds } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
