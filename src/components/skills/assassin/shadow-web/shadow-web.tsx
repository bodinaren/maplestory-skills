import { Component, Prop } from "@stencil/core";
import { ShadowWeb } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-web",
  styleUrls: ["../../skills.scss", "shadow-web.scss"],
  shadow: true
})
export class ShadowWebComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowWeb.minLevel;

  render() {
    return [
      <ms-icon name="shadow-web"></ms-icon>,
      <ms-skill-overlay skill={ ShadowWeb } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
