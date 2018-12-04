import { Component, Prop } from "@stencil/core";
import { Intimidation } from "../../../../global/values/berserker";

@Component({
  tag: "ms-intimidation",
  styleUrls: ["../../skills.scss", "intimidation.scss"],
  shadow: true
})
export class IntimidationComponent {

  @Prop({ reflectToAttr: true }) level: number = Intimidation.minLevel;

  render() {
    return [
      <ms-icon name="intimidation"></ms-icon>,
      <ms-skill-overlay skill={ Intimidation } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
