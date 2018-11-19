import { Component, Prop } from "@stencil/core";
import { ShadowCutterValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-cutter",
  styleUrls: ["../../skills.scss", "shadow-cutter.scss"],
  shadow: true
})
export class ShadowCutterComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowCutterValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShadowCutterValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShadowCutterValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="shadow-cutter"></ms-icon>,
      <ms-skill-overlay heading="Shadow Cutter"
                        element="Dark"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="One-handed Thrown Weapon"
                        requirements={ this.getRequirements() }
                        spirit={ 13 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shadow-cutter"></ms-icon>
        <div slot="description">
          Throw your weapon forward <span>8</span> m with a strong spin to
          deal <span>{ ShadowCutterValues.damage[this.level] }%</span> dark
          damage <span>2</span> times to <span>8</span> enemies in its path both ways.
          The damage of this attack is affected by the weapon in your right hand.
          Consumes <span>13</span> spirit
        </div>
      </ms-skill-overlay>
    ];
  }
}
