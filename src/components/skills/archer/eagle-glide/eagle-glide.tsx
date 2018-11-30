import { Component, Prop } from "@stencil/core";
import { EagleGlide } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagle-glide",
  styleUrls: ["../../skills.scss", "eagle-glide.scss"],
  shadow: true
})
export class EagleGlideComponent {

  @Prop({ reflectToAttr: true }) level: number = EagleGlide.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EagleGlide.maxLevel;

  render() {
    return [
      <ms-icon name="eagle-glide"></ms-icon>,
      <ms-skill-overlay heading={ EagleGlide.name }
                        level={ this.level }
                        max={ this.max }>
        <ms-icon slot="icon" name="eagle-glide"></ms-icon>
        <div slot="description">
          Summon Bronze Eagle and grab onto him to fly <span>7.5</span> m forward.
          This skill can cancel other skills. Consumes <span>80</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
