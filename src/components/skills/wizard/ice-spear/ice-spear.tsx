import { Component, Prop } from "@stencil/core";
import { IceSpearValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-ice-spear",
  styleUrls: ["../../skills.scss", "ice-spear.scss"],
  shadow: true
})
export class IceSpearComponent {

  @Prop({ reflectToAttr: true }) level: number = IceSpearValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IceSpearValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IceSpearValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ice-spear"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ice-spear"></ms-icon>
        <div slot="description">
          Gather ice from the moisture in the air to fling
          at the closest enemy up to <span>8</span> m in front of you.
          The spear of ice breaks on impact, its shards
          dealing <span>{ IceSpearValues.damage[this.level] }%</span> ice damage
          to 8 enemies within 2.5 m and decreasing movement speed by <span>10%</span> for <span>3</span> sec.
          This cold effect can stack up to <span>6</span> times.
          Enemies at max stacks are frozen for <span>1</span> sec.
          Consumes <span>20</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
