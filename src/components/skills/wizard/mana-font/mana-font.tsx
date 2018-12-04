import { Component, Prop } from "@stencil/core";
import { ManaFont } from "../../../../global/values/wizard";

@Component({
  tag: "ms-mana-font",
  styleUrls: ["../../skills.scss", "mana-font.scss"],
  shadow: true
})
export class ManaFontComponent {

  @Prop({ reflectToAttr: true }) level: number = ManaFont.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="mana-font" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ ManaFont } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
