import { Component, Prop } from "@stencil/core";
import { ShieldToss } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-toss",
  styleUrls: ["../../skills.scss", "shield-toss.scss"],
  shadow: true
})
export class ShieldTossComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldToss.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldToss.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldToss.levelRequirement[this.level] }+`,
      `Iron Shield [Level 4+]`,
      `Typhoon Slash [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-toss"></ms-icon>,
      <ms-skill-overlay heading={ ShieldToss.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        spirit={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-toss"></ms-icon>
        <div slot="description">
          Toss your shield <span>7.5</span> m forward like a boomerang,
          dealing <span>{ ShieldToss.values.damage[this.level] }%</span> damage <span>2</span> times
          to <span>8</span> enemies and reducing their defense
          by <span>{ ShieldToss.values.reduction[this.level] }%</span> for <span>12</span> sec.
          Consumes <span>16</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
