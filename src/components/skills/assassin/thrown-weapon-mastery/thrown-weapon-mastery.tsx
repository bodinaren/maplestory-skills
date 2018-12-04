import { Component, Prop } from "@stencil/core";
import { ThrownWeaponMastery } from "../../../../global/values/assassin";

@Component({
  tag: "ms-thrown-weapon-mastery",
  styleUrls: ["../../skills.scss", "thrown-weapon-mastery.scss"],
  shadow: true
})
export class ThrownWeaponMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ThrownWeaponMastery.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="thrown-weapon-mastery"></ms-icon>,
      <ms-skill-overlay skill={ ThrownWeaponMastery } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
