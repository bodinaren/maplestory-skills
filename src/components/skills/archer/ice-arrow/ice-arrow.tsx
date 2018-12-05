import { Component, Prop } from "@stencil/core";
import { IceArrow } from "../../../../global/values/archer";

@Component({
  tag: "ms-ice-arrow",
  styleUrls: ["../../skills.scss", "ice-arrow.scss"],
  shadow: true
})
export class IceArrowComponent {

  @Prop({ reflectToAttr: true }) level: number = IceArrow.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IceArrow.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IceArrow.levelRequirement[this.level] }+`,
      `Evasive Salvo [Level 5+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ice-arrow"></ms-icon>,
      <ms-skill-overlay heading={ IceArrow.name }
                        element="Ice"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        spirit={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ice-arrow"></ms-icon>
        <div slot="description">
          Fire three ice arrows at once,
          dealing <span>{ IceArrow.values.damage[this.level] }%</span> damage to enemies up to <span>9</span> m
          in front of you and decreasing their movement speed and jump power by <span>4%</span> for <span>5</span> sec.
          Ice arrows pierce the enemy <span>4</span> times and can hit enemies behind.
          The movement speed reduction effect can stack up to <span>10</span> times.
          At max stacks, the target will be frozen for <span>2</span> sec.
          Consumes <span>6</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
