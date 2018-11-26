import { Component, Prop } from "@stencil/core";
import { SpiritThiefValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-spirit-thief",
  styleUrls: ["../../skills.scss", "spirit-thief.scss"],
  shadow: true
})
export class SpiritThiefComponent {

  @Prop({ reflectToAttr: true }) level: number = SpiritThiefValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SpiritThiefValues.maxLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="spirit-thief" sp={ true }></ms-icon>,
      <ms-skill-overlay heading="Spirit Thief"
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="spirit-thief" sp={ true }></ms-icon>
        <div slot="description">
          Steal from an enemy. When successful, attacks restore <span>4</span> spirit on hit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
