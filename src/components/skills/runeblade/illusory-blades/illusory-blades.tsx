import { Component, Prop } from "@stencil/core";
import { IllusoryBlades } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-illusory-blades",
  styleUrls: ["../../skills.scss", "illusory-blades.scss"],
  shadow: true
})
export class IllusoryBladesComponent {

  @Prop({ reflectToAttr: true }) level: number = IllusoryBlades.minLevel;

  render() {
    return [
      <ms-icon name="illusory-blades"></ms-icon>,
      <ms-skill-overlay skill={ IllusoryBlades } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
