import { Component, Prop } from "@stencil/core";
import { TyphoonSlash } from "../../../../global/values/knight";

@Component({
  tag: "ms-typhoon-slash",
  styleUrls: ["../../skills.scss", "typhoon-slash.scss"],
  shadow: true
})
export class TyphoonSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = TyphoonSlash.minLevel;

  render() {
    return [
      <ms-icon name="typhoon-slash"></ms-icon>,
      <ms-skill-overlay skill={ TyphoonSlash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
