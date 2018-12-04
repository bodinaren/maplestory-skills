import { Component, Prop } from "@stencil/core";
import { IronShield } from "../../../../global/values/knight";

@Component({
  tag: "ms-iron-shield",
  styleUrls: ["../../skills.scss", "iron-shield.scss"],
  shadow: true
})
export class IronShieldComponent {

  @Prop({ reflectToAttr: true }) level: number = IronShield.minLevel;

  render() {
    return [
      <ms-icon name="iron-shield"></ms-icon>,
      <ms-skill-overlay skill={ IronShield } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
