import { Component, Prop } from "@stencil/core";
import { JetBoots } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-jet-boots",
  styleUrls: ["../../skills.scss", "jet-boots.scss"],
  shadow: true
})
export class JetBootsComponent {

  @Prop({ reflectToAttr: true }) level: number = JetBoots.minLevel;

  render() {
    return [
      <ms-icon name="jet-boots"></ms-icon>,
      <ms-skill-overlay skill={ JetBoots } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
