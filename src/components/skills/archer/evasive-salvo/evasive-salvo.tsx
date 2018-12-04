import { Component, Prop } from "@stencil/core";
import { EvasiveSalvo } from "../../../../global/values/archer";

@Component({
  tag: "ms-evasive-salvo",
  styleUrls: ["../../skills.scss", "evasive-salvo.scss"],
  shadow: true
})
export class EvasiveSalvoComponent {

  @Prop({ reflectToAttr: true }) level: number = EvasiveSalvo.minLevel;

  render() {
    return [
      <ms-icon name="evasive-salvo"></ms-icon>,
      <ms-skill-overlay skill={ EvasiveSalvo } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
