import { Component, Prop } from "@stencil/core";
import { CunningTactics } from "../../../../global/values/thief";

@Component({
  tag: "ms-cunning-tactics",
  styleUrls: ["../../skills.scss", "cunning-tactics.scss"],
  shadow: true
})
export class CunningTacticsComponent {

  @Prop({ reflectToAttr: true }) level: number = CunningTactics.minLevel;

  render() {
    return [
      <ms-icon name="cunning-tactics"></ms-icon>,
      <ms-skill-overlay skill={ CunningTactics } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
