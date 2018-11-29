import { Component, Prop } from "@stencil/core";
import { MantraReleaseValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-mantra-release",
  styleUrls: ["../../skills.scss", "mantra-release.scss"],
  shadow: true
})
export class MantraReleaseComponent {

  @Prop({ reflectToAttr: true }) level: number = MantraReleaseValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MantraReleaseValues.maxLevel;

  render() {
    return [
      <ms-icon name="mantra-release"></ms-icon>,
      <ms-skill-overlay heading="Mantra Release"
                        level={ this.level }
                        max={ this.max }>
        <ms-icon slot="icon" name="mantra-release"></ms-icon>
        <div slot="description">
          Focus on the mysterious energy within to create Mantra Cores (orb energy) and
          restore <span>12</span> spirit. You can create up to <span>4</span> Mantra Cores,
          which can be activated consecutively as long as the key is held.
          While the Mantra Cores are being created, a greater amount of energy can be controlled
          and a some skills can be enhanced prior to activation.
        </div>
      </ms-skill-overlay>
    ];
  }
}
