import { Component, Prop } from "@stencil/core";
import { ShadowChaserValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-chaser",
  styleUrls: ["../../skills.scss", "shadow-chaser.scss"],
  shadow: true
})
export class ShadowChaserComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowChaserValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShadowChaserValues.maxLevel;

  render() {
    return [
      <ms-icon name="shadow-chaser"></ms-icon>,
      <ms-skill-overlay heading="Shadow Chaser"
                        element="Dark"
                        level={ this.level }
                        type="Long Range / Physical"
                        max={ this.max }>
        <ms-icon slot="icon" name="shadow-chaser"></ms-icon>
        <div slot="description">
          Send your mirror image to the nearest enemy within <span>8</span> m in front of you,
          dealing <span>23%</span> damage and marking them with Assassin's Brand,
          which steals their energy to grant you <span>1</span> spirit every <span>0.1</span> sec for <span>30</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
