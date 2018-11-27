import { Component, Prop } from "@stencil/core";
import { SteadfastFaithValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-steadfast-faith",
  styleUrls: ["../../skills.scss", "steadfast-faith.scss"],
  shadow: true
})
export class SteadfastFaithComponent {

  @Prop({ reflectToAttr: true }) level: number = SteadfastFaithValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SteadfastFaithValues.maxLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="steadfast-faith" sp={ true }></ms-icon>,
      <ms-skill-overlay heading="Steadfast Faith"
                        element="Holy"
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="steadfast-faith" sp={ true }></ms-icon>
        <div slot="description">
          You've been rewarded for your devotion,
          recovering <span>8</span> spirit every <span>0.5</span> sec,
          plus an addition <span>4</span> spirit for every enemy
          suffering from Celestial Light.
        </div>
      </ms-skill-overlay>
    ];
  }
}
