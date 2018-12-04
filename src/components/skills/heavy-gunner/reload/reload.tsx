import { Component, Prop } from "@stencil/core";
import { Reload } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-reload",
  styleUrls: ["../../skills.scss", "reload.scss"],
  shadow: true
})
export class ReloadComponent {

  @Prop({ reflectToAttr: true }) level: number = Reload.minLevel;

  render() {
    return [
      <ms-icon name="reload" sp={ true }></ms-icon>,
      <ms-skill-overlay skill={ Reload } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
