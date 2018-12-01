import { Component, Prop } from "@stencil/core";
import { StingingFlurry } from "../../../../global/values/knight";

@Component({
  tag: "ms-stinging-flurry",
  styleUrls: ["../../skills.scss", "stinging-flurry.scss"],
  shadow: true
})
export class StingingFlurryComponent {

  @Prop({ reflectToAttr: true }) level: number = StingingFlurry.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = StingingFlurry.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ StingingFlurry.levelRequirement[this.level] }+`,
      `Cross Cut [Level 5+]`,
      `Divine Strike [Level 5+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="stinging-flurry"></ms-icon>,
      <ms-skill-overlay heading={ StingingFlurry.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        spirit={ 13 }
                        max={ this.max }>
        <ms-icon slot="icon" name="stinging-flurry"></ms-icon>
        <div slot="description">
          Captain Allon's special skill stabs quickly,
          dealing <span>{ StingingFlurry.values.damage[this.level] }%</span> damage <span>3</span> times
          to <span>3</span> enemies up to <span>3</span> m in front of you.
          The skill lasts while the skill key is held down.
          Consumes <span>13</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
