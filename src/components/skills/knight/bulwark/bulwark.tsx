import { Component, Prop } from "@stencil/core";
import { Bulwark } from "../../../../global/values/knight";

@Component({
  tag: "ms-bulwark",
  styleUrls: ["../../skills.scss", "bulwark.scss"],
  shadow: true
})
export class BulwarkComponent {

  @Prop({ reflectToAttr: true }) level: number = Bulwark.minLevel;

  render() {
    return [
      <ms-icon name="bulwark"></ms-icon>,
      <ms-skill-overlay skill={ Bulwark } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
