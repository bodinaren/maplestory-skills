import { Component, Prop } from "@stencil/core";
import { BulletSpray } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-bullet-spray",
  styleUrls: ["../../skills.scss", "bullet-spray.scss"],
  shadow: true
})
export class BulletSprayComponent {

  @Prop({ reflectToAttr: true }) level: number = BulletSpray.minLevel;

  render() {
    return [
      <ms-icon name="bullet-spray"></ms-icon>,
      <ms-skill-overlay skill={ BulletSpray } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
