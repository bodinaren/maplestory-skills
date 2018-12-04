import { Component, Prop } from "@stencil/core";
import { RuneFocus } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-rune-focus",
  styleUrls: ["../../skills.scss", "rune-focus.scss"],
  shadow: true
})
export class RuneFocusComponent {

  @Prop({ reflectToAttr: true }) level: number = RuneFocus.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="rune-focus"></ms-icon>,
      <ms-skill-overlay skill={ RuneFocus } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
