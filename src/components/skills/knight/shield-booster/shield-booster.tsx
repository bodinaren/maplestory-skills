import { Component, Prop } from "@stencil/core";
import { ShieldBooster } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-booster",
  styleUrls: ["../../skills.scss", "shield-booster.scss"],
  shadow: true
})
export class ShieldBoosterComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldBooster.minLevel;

  render() {
    return [
      <ms-icon name="shield-booster"></ms-icon>,
      <ms-skill-overlay skill={ ShieldBooster } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
