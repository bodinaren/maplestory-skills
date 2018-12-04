import { Component, Prop } from "@stencil/core";
import { ManaClaw } from "../../../../global/values/wizard";

@Component({
  tag: "ms-mana-claw",
  styleUrls: ["../../skills.scss", "mana-claw.scss"],
  shadow: true
})
export class ManaClawComponent {

  @Prop({ reflectToAttr: true }) level: number = ManaClaw.minLevel;

  render() {
    return [
      <ms-icon name="mana-claw"></ms-icon>,
      <ms-skill-overlay skill={ ManaClaw } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
