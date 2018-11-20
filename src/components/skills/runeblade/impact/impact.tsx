import { Component, Prop } from "@stencil/core";
import { ImpactValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-impact",
  styleUrls: ["../../skills.scss", "impact.scss"],
  shadow: true
})
export class ImpactComponent {

  @Prop({ reflectToAttr: true }) level: number = ImpactValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ImpactValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ImpactValues.levelRequirement[this.level] }+`,
      `Flurry [Level 4+]`,
      `Echoing Blade [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="impact"></ms-icon>,
      <ms-skill-overlay heading="Impact"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="impact"></ms-icon>
        <div slot="description">
          Drive your blade into the ground, creating a shock wave that
          deals <span>{ ImpactValues.damage[this.level] }%</span> damage
          to <span>5</span> enemies within <span>2.25</span> m.
          This skill attunes with your Flame, Frost, and Storm Sigil skills.
          You are immune to knockback while casting this skill.
          Consumes <span>45</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
