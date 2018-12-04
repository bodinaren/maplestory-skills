import { Component, Prop } from "@stencil/core";
import { VoidSlash } from "../../../../global/values/berserker";

@Component({
  tag: "ms-void-slash",
  styleUrls: ["../../skills.scss", "void-slash.scss"],
  shadow: true
})
export class VoidSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = VoidSlash.minLevel;

  render() {
    return [
      <ms-icon name="void-slash"></ms-icon>,
      <ms-skill-overlay skill={ VoidSlash } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
