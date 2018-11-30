import { Component, Prop } from "@stencil/core";
import { Flurry } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-flurry",
  styleUrls: ["../../skills.scss", "flurry.scss"],
  shadow: true
})
export class FlurryComponent {

  @Prop({ reflectToAttr: true }) level: number = Flurry.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Flurry.maxLevel;

  getRequirements(): string[] {
    if (Flurry.levelRequirement[this.level] > 0) {
      return [
        `Level ${ Flurry.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="flurry"></ms-icon>,
      <ms-skill-overlay heading={ Flurry.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="flurry"></ms-icon>
        <div slot="description">
          Attack with <span>3</span> slashes of your blade,
          each dealing <span>{ Flurry.values.damage[this.level] }%</span> damage
          to <span>5</span> enemies up to <span>3</span> m in front of you.
          This skill attunes with your Flame, Frost, and Storm Sigil skills.
        </div>
      </ms-skill-overlay>
    ];
  }
}
