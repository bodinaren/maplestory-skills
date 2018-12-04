import { Component, Prop } from "@stencil/core";
import { Pyromancy } from "../../../../global/values/wizard";

@Component({
  tag: "ms-pyromancy",
  styleUrls: ["../../skills.scss", "pyromancy.scss"],
  shadow: true
})
export class PyromancyComponent {

  @Prop({ reflectToAttr: true }) level: number = Pyromancy.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="pyromancy"></ms-icon>,
      <ms-skill-overlay skill={ Pyromancy } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
