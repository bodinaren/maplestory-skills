import { Component, Prop } from "@stencil/core";
import { MarkOfDeath } from "../../../../global/values/assassin";

@Component({
  tag: "ms-mark-of-death",
  styleUrls: ["../../skills.scss", "mark-of-death.scss"],
  shadow: true
})
export class MarkOfDeathComponent {

  @Prop({ reflectToAttr: true }) level: number = MarkOfDeath.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="mark-of-death"></ms-icon>,
      <ms-skill-overlay skill={ MarkOfDeath } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
