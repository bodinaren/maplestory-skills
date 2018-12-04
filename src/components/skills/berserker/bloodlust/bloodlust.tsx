import { Component, Prop } from "@stencil/core";
import { Bloodlust } from "../../../../global/values/berserker";

@Component({
  tag: "ms-bloodlust",
  styleUrls: ["../../skills.scss", "bloodlust.scss"],
  shadow: true
})
export class BloodlustComponent {

  @Prop({ reflectToAttr: true }) level: number = Bloodlust.minLevel;

  render() {
    return [
      <ms-icon name="bloodlust"></ms-icon>,
      <ms-skill-overlay skill={ Bloodlust } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
