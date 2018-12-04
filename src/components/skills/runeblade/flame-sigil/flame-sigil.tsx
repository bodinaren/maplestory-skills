import { Component, Prop } from "@stencil/core";
import { FlameSigil } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-flame-sigil",
  styleUrls: ["../../skills.scss", "flame-sigil.scss"],
  shadow: true
})
export class FlameSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameSigil.minLevel;

  render() {
    return [
      <ms-icon name="flame-sigil"></ms-icon>,
      <ms-skill-overlay skill={ FlameSigil } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
