import { Component, Prop } from "@stencil/core";
import { SteadfastFaithValues } from "../../../global/values";

@Component({
  tag: "ms-steadfast-faith",
  styleUrls: ["../skills.scss", "steadfast-faith.scss"],
  shadow: true
})
export class SteadfastFaithComponent {

  @Prop({ reflectToAttr: true }) level: number = SteadfastFaithValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = SteadfastFaithValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="steadfast-faith"></ms-icon>
        }
        <ms-skill-overlay heading="Steadfast Faith"
                          element="Holy"
                          level={ this.level }
                          passive={ true }
                          max={ 1 }>
          <ms-icon slot="icon" name="steadfast-faith"></ms-icon>
          <div slot="description">
            You've been rewarded for your devotion,
            recovering <span>8</span> spirit every <span>0.5</span> sec,
            plus an addition <span>4</span> spirit for every enemy
            suffering from Celestial Light.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
