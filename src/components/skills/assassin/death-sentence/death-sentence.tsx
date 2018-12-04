import { Component, Prop } from "@stencil/core";
import { DeathSentence } from "../../../../global/values/assassin";

@Component({
  tag: "ms-death-sentence",
  styleUrls: ["../../skills.scss", "death-sentence.scss"],
  shadow: true
})
export class DeathSentenceComponent {

  @Prop({ reflectToAttr: true }) level: number = DeathSentence.minLevel;

  render() {
    return [
      <ms-icon name="death-sentence"></ms-icon>,
      <ms-skill-overlay skill={ DeathSentence } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
