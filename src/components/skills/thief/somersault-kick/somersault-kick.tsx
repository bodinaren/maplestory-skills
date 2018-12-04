import { Component, Prop } from "@stencil/core";
import { SomersaultKick } from "../../../../global/values/thief";

@Component({
  tag: "ms-somersault-kick",
  styleUrls: ["../../skills.scss", "somersault-kick.scss"],
  shadow: true
})
export class SomersaultKickComponent {

  @Prop({ reflectToAttr: true }) level: number = SomersaultKick.minLevel;

  render() {
    return [
      <ms-icon name="somersault-kick"></ms-icon>,
      <ms-skill-overlay skill={ SomersaultKick } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
