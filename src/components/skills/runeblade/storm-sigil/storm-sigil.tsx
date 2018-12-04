import { Component, Prop } from "@stencil/core";
import { StormSigil } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-storm-sigil",
  styleUrls: ["../../skills.scss", "storm-sigil.scss"],
  shadow: true
})
export class StormSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = StormSigil.minLevel;

  render() {
    return [
      <ms-icon name="storm-sigil"></ms-icon>,
      <ms-skill-overlay skill={ StormSigil } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
