import { Component, Prop } from "@stencil/core";
import { IronDefenseValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-iron-defense",
  styleUrls: ["../../skills.scss", "iron-defense.scss"],
  shadow: true
})
export class IronDefenseComponent {

  @Prop({ reflectToAttr: true }) level: number = IronDefenseValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IronDefenseValues.maxLevel;

  render() {
    return [
      <ms-icon name="iron-defense"></ms-icon>,
      <ms-skill-overlay heading="Iron Defense"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        cooldown={ 5 }
                        max={ this.max }>
        <ms-icon slot="icon" name="iron-defense"></ms-icon>
        <div slot="description">
          Adopt a knightly defensive stance, restoring <span>4</span> spirit every <span>0.3</span> sec
          and decreasing damage taken by <span>10%</span>, but also reducing physical and magic attack by <span>25%</span>.
          Press the skill key again to toggle the stance.
        </div>
      </ms-skill-overlay>
    ];
  }
}
