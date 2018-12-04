import { Component, Prop } from "@stencil/core";
import { MesoguardPlus } from "../../../../global/values/thief";

@Component({
  tag: "ms-mesoguard-plus",
  styleUrls: ["../../skills.scss", "mesoguard-plus.scss"],
  shadow: true
})
export class MesoguardPlusComponent {

  @Prop({ reflectToAttr: true }) level: number = MesoguardPlus.minLevel;

  render() {
    return [
      <ms-icon name="mesoguard-plus"></ms-icon>,
      <ms-skill-overlay skill={ MesoguardPlus } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
