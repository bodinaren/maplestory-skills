import { Component, Prop } from "@stencil/core";
import { TornadoSlash } from "../../../../global/values/knight";

@Component({
  tag: "ms-tornado-slash",
  styleUrls: ["../../skills.scss", "tornado-slash.scss"],
  shadow: true
})
export class TornadoSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = TornadoSlash.minLevel;

  render() {
    return [
      <ms-icon name="tornado-slash"></ms-icon>,
      <ms-skill-overlay skill={ TornadoSlash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
