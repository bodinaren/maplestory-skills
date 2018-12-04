import { Component, Prop } from "@stencil/core";
import { PhantomClaw } from "../../../../global/values/wizard";

@Component({
  tag: "ms-phantom-claw",
  styleUrls: ["../../skills.scss", "phantom-claw.scss"],
  shadow: true
})
export class PhantomClawComponent {

  @Prop({ reflectToAttr: true }) level: number = PhantomClaw.minLevel;

  render() {
    return [
      <ms-icon name="phantom-claw"></ms-icon>,
      <ms-skill-overlay skill={ PhantomClaw } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
