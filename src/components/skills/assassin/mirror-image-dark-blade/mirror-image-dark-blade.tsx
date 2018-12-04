import { Component, Prop } from "@stencil/core";
import { MirrorImageDarkBlade } from "../../../../global/values/assassin";

@Component({
  tag: "ms-mirror-image-dark-blade",
  styleUrls: ["../../skills.scss", "mirror-image-dark-blade.scss"],
  shadow: true
})
export class MirrorImageDarkBladeComponent {

  @Prop({ reflectToAttr: true }) level: number = MirrorImageDarkBlade.minLevel;

  render() {
    return [
      <ms-icon name="mirror-image-dark-blade"></ms-icon>,
      <ms-skill-overlay skill={ MirrorImageDarkBlade } level={ this.level }></ms-skill-overlay>,
    ];
  }
}
