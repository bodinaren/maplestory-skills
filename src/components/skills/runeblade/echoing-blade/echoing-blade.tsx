import { Component, Prop } from "@stencil/core";
import { EchoingBlade } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-echoing-blade",
  styleUrls: ["../../skills.scss", "echoing-blade.scss"],
  shadow: true
})
export class EchoingBladeComponent {

  @Prop({ reflectToAttr: true }) level: number = EchoingBlade.minLevel;

  render() {
    return [
      <ms-icon name="echoing-blade"></ms-icon>,
      <ms-skill-overlay skill={ EchoingBlade } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
