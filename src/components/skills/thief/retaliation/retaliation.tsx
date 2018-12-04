import { Component, Prop } from "@stencil/core";
import { Retaliation } from "../../../../global/values/thief";

@Component({
  tag: "ms-retaliation",
  styleUrls: ["../../skills.scss", "retaliation.scss"],
  shadow: true
})
export class RetaliationComponent {

  @Prop({ reflectToAttr: true }) level: number = Retaliation.minLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="retaliation"></ms-icon>,
      <ms-skill-overlay skill={ Retaliation } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
