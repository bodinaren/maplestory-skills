import { Component, Prop } from "@stencil/core";
import { FlameTornado } from "../../../../global/values/wizard";

@Component({
  tag: "ms-flame-tornado",
  styleUrls: ["../../skills.scss", "flame-tornado.scss"],
  shadow: true
})
export class FlameTornadoComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameTornado.minLevel;

  render() {
    return [
      <ms-icon name="flame-tornado"></ms-icon>,
      <ms-skill-overlay skill={ FlameTornado } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
