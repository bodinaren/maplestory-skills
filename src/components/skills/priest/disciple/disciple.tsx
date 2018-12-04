import { Component, Prop } from "@stencil/core";
import { Disciple } from "../../../../global/values/priest";

@Component({
  tag: "ms-disciple",
  styleUrls: ["../../skills.scss", "disciple.scss"],
  shadow: true
})
export class DiscipleComponent {

  @Prop({ reflectToAttr: true }) level: number = Disciple.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="disciple"></ms-icon>,
      <ms-skill-overlay skill={ Disciple } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
