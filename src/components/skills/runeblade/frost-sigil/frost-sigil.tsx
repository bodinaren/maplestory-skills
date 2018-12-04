import { Component, Prop } from "@stencil/core";
import { FrostSigil } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-frost-sigil",
  styleUrls: ["../../skills.scss", "frost-sigil.scss"],
  shadow: true
})
export class FrostSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = FrostSigil.minLevel;

  render() {
    return [
      <ms-icon name="frost-sigil"></ms-icon>,
      <ms-skill-overlay skill={ FrostSigil } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
