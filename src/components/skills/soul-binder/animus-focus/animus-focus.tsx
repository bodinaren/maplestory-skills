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
      `Orb Mastery [Level 6+]`,
      `Narubashan Liberation [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="animus-focus"></ms-icon>,
      <ms-skill-overlay heading="Animus Focus"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="animus-focus"></ms-icon>
        <div slot="description">
          Concentrate your inner animus and amplify the maximum energy of the Mantra Core.
          Increases the damage of Extension Ball, Energy Stream, and Shooting Star
          (which activate when Mantra Cores are at max quantity)
          by <span>{ AnimusFocusValues.damage[this.level] }%</span>, and increases the recovery of
          Life String by <span>{ AnimusFocusValues.recovery[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
