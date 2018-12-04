import { Component, Prop } from "@stencil/core";
import { RuthlessGuile } from "../../../../global/values/thief";

@Component({
  tag: "ms-ruthless-guile",
  styleUrls: ["../../skills.scss", "ruthless-guile.scss"],
  shadow: true
})
export class RuthlessGuileComponent {

  @Prop({ reflectToAttr: true }) level: number = RuthlessGuile.minLevel;

  render() {
    return [
      <ms-icon name="ruthless-guile"></ms-icon>,
      <ms-skill-overlay skill={ RuthlessGuile } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
