import { Component, Prop } from "@stencil/core";
import { Dash } from "../../../../global/values/assassin";

@Component({
  tag: "ms-dash",
  styleUrls: ["../../skills.scss", "dash.scss"],
  shadow: true
})
export class DashComponent {

  @Prop({ reflectToAttr: true }) level: number = Dash.minLevel;

  render() {
    return [
      <ms-icon name="dash"></ms-icon>,
      <ms-skill-overlay skill={ Dash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
