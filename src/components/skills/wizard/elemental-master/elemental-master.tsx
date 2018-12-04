import { Component, Prop } from "@stencil/core";
import { ElementalMaster } from "../../../../global/values/wizard";

@Component({
  tag: "ms-elemental-master",
  styleUrls: ["../../skills.scss", "elemental-master.scss"],
  shadow: true
})
export class ElementalMasterComponent {

  @Prop({ reflectToAttr: true }) level: number = ElementalMaster.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="elemental-master"></ms-icon>,
      <ms-skill-overlay skill={ ElementalMaster } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
