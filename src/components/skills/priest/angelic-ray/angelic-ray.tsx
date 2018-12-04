import { Component, Prop } from "@stencil/core";
import { AngelicRay } from "../../../../global/values/priest";

@Component({
  tag: "ms-angelic-ray",
  styleUrls: ["../../skills.scss", "angelic-ray.scss"],
  shadow: true
})
export class AngelicRayComponent {

  @Prop({ reflectToAttr: true }) level: number = AngelicRay.minLevel;

  render() {
    return [
      <ms-icon name="angelic-ray"></ms-icon>,
      <ms-skill-overlay skill={ AngelicRay } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
