import { Component, Prop } from "@stencil/core";
import { HeavenlyWingsValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-heavenly-wings",
  styleUrls: ["../skills.scss", "heavenly-wings.scss"],
  shadow: true
})
export class HeavenlyWingsComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = HeavenlyWingsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HeavenlyWingsValues.maxLevel;

  render() {
    return [
      <ms-icon slot="icon" name="heavenly-wings"></ms-icon>,
      <ms-skill-overlay heading="Heavenly Wings"
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Codex"
                        max={ this.max }>
        <ms-icon slot="icon" name="heavenly-wings"></ms-icon>
        <div slot="description">
          Spread your wings of light and soar to the farthest ally up to <span>6</span> m in front of you.
          The wings then transform into a divine aura, increasing you and your target's movement
          speed by <span>20%</span> for <span>5</span> sec and restoring health up to <span>90%</span> of your magic attack.
          If no allies are in range, you'll fly <span>4.5</span> m forward. This skill can cancel other skills.
          You will be immune to knockback while this skill is active. Consumes <span>60</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
