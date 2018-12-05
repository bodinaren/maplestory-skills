import { Component, Prop } from "@stencil/core";
import { Haste } from "../../../../global/values/thief";

@Component({
  tag: "ms-haste",
  styleUrls: ["../../skills.scss", "haste.scss"],
  shadow: true
})
export class HasteComponent {

  @Prop({ reflectToAttr: true }) level: number = Haste.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Haste.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Haste.levelRequirement[this.level] }+`,
      `Mind Breaker [Level 5+]`,
      `Vicious Cuts [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="haste"></ms-icon>,
      <ms-skill-overlay heading={ Haste.name }
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="haste"></ms-icon>
        <div slot="description">
          Your movements mimic the wind.
          For <span>60</span> sec, <span>4</span> spirit is consumed in <span>0.5</span> sec intervals to increase
          attack speed and movement speed by <span>{ Haste.values.movement[this.level] }%</span> and
          physical attack by <span>{ Haste.values.attack[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
