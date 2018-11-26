import { Component, Prop } from "@stencil/core";
import { StunGrenadesValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-stun-grenades",
  styleUrls: ["../../skills.scss", "stun-grenades.scss"],
  shadow: true
})
export class StunGrenadesComponent {

  @Prop({ reflectToAttr: true }) level: number = StunGrenadesValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = StunGrenadesValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ StunGrenadesValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="stun-grenades"></ms-icon>,
      <ms-skill-overlay heading="Stun Grenades"
                        element="Fire"
                        level={ this.level }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        spirit={ 6 }
                        cooldown={ 5 }
                        max={ this.max }>
        <ms-icon slot="icon" name="stun-grenades"></ms-icon>
        <div slot="description">
          Toss two grenades <span>3</span> m in front of you that explode after <span>0.5</span> sec,
          dealing <span>{ StunGrenadesValues.damage[this.level] }%</span> fire damage
          to <span>5</span> enemies within <span>{ StunGrenadesValues.range[this.level] }</span> m
          and has a <span>{ StunGrenadesValues.stun[this.level] }%</span> chance to stun.
          Consumes <span>6</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
