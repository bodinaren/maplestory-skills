import { Component, Prop } from "@stencil/core";
import { AnimusFocusValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-animus-focus",
  styleUrls: ["../../skills.scss", "animus-focus.scss"],
  shadow: true
})
export class AnimusFocusComponent {

  @Prop({ reflectToAttr: true }) level: number = AnimusFocusValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AnimusFocusValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AnimusFocusValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="animus-focus"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="animus-focus"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ AnimusFocusValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ AnimusFocusValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
