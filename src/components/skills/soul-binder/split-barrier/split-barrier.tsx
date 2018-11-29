import { Component, Prop } from "@stencil/core";
import { SplitBarrierValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-split-barrier",
  styleUrls: ["../../skills.scss", "split-barrier.scss"],
  shadow: true
})
export class SplitBarrierComponent {

  @Prop({ reflectToAttr: true }) level: number = SplitBarrierValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SplitBarrierValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SplitBarrierValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="split-barrier"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="split-barrier"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ SplitBarrierValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ SplitBarrierValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
