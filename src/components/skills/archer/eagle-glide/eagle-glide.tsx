import { Component, Prop } from "@stencil/core";
import { EagleGlide } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagle-glide",
  styleUrls: ["../../skills.scss", "eagle-glide.scss"],
  shadow: true
})
export class EagleGlideComponent {

  @Prop({ reflectToAttr: true }) level: number = EagleGlide.minLevel;

  render() {
    return [
      <ms-icon name="eagle-glide"></ms-icon>,
      <ms-skill-overlay skill={ EagleGlide } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
