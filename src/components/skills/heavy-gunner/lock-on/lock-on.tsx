import { Component, Prop } from "@stencil/core";
import { LockOn } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-lock-on",
  styleUrls: ["../../skills.scss", "lock-on.scss"],
  shadow: true
})
export class LockOnComponent {

  @Prop({ reflectToAttr: true }) level: number = LockOn.minLevel;

  render() {
    return [
      <ms-icon name="lock-on"></ms-icon>,
      <ms-skill-overlay skill={ LockOn } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
