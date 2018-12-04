import { Component, Prop } from "@stencil/core";
import { MagicArmor } from "../../../../global/values/wizard";

@Component({
  tag: "ms-magic-armor",
  styleUrls: ["../../skills.scss", "magic-armor.scss"],
  shadow: true
})
export class MagicArmorComponent {

  @Prop({ reflectToAttr: true }) level: number = MagicArmor.minLevel;

  render() {
    return [
      <ms-icon name="magic-armor"></ms-icon>,
      <ms-skill-overlay skill={ MagicArmor } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
