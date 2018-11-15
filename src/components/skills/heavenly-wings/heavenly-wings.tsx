import { Component, Prop } from "@stencil/core";
import { HeavenlyWingsValues } from "../../../global/values";

@Component({
  tag: "ms-heavenly-wings",
  styleUrls: ["../skills.scss", "heavenly-wings.scss"],
  shadow: true
})
export class HeavenlyWingsComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = HeavenlyWingsValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = HeavenlyWingsValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  render() {
    return (
      <div>
        { (this.showImage) &&
          <img src="assets/heavenly-wings.png" />
        }
        <ms-skill-overlay heading="Heavenly Wings"
                          element="Holy"
                          level={ this.level }
                          weaponRequired="Off-hand Codex"
                          max={ 1 }>
          <ms-icon slot="icon" name="heavenly-wings"></ms-icon>
          <div slot="description">
            Spread your wings of light and soar to the farthest ally up to <span>6</span> m in front of you.
            The wings then transform into a divine aura, increasing you and your target's movement
            speed by <span>20%</span> for <span>5</span> sec and restoring health up to <span>90%</span> of your magic attack.
            If no allies are in range, you'll fly <span>4.5</span> m forward. This skill can cancel other skills.
            You will be immune to knockback while this skill is active. Consumes <span>60</span> stamina.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
