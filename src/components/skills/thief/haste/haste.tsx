import { Component, Prop } from "@stencil/core";
import { HasteValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-haste",
  styleUrls: ["../../skills.scss", "haste.scss"],
  shadow: true
})
export class HasteComponent {

  @Prop({ reflectToAttr: true }) level: number = HasteValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HasteValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HasteValues.levelRequirement[this.level] }+`,
      `Mind Breaker [Level 5+]`,
      `Vicious Cuts [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="haste"></ms-icon>,
      <ms-skill-overlay heading="Haste"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="haste"></ms-icon>
        <div slot="description">
          Your movements mimic the wind.
          For <span>60</span> sec, <span>4</span> spirit is consumed in <span>0.5</span> sec intervals to increase
          attack speed and movement speed by <span>{ HasteValues.movement[this.level] }%</span> and
          physical attack by <span>{ HasteValues.attack[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
