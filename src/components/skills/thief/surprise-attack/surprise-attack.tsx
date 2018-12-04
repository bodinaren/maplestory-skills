import { Component, Prop } from "@stencil/core";
import { SurpriseAttack } from "../../../../global/values/thief";

@Component({
  tag: "ms-surprise-attack",
  styleUrls: ["../../skills.scss", "surprise-attack.scss"],
  shadow: true
})
export class SurpriseAttackComponent {

  @Prop({ reflectToAttr: true }) level: number = SurpriseAttack.minLevel;

  render() {
    return [
      <ms-icon name="surprise-attack"></ms-icon>,
      <ms-skill-overlay skill={ SurpriseAttack } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
