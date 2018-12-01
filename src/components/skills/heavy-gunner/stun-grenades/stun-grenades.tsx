import { Component, Prop } from "@stencil/core";
import { StunGrenades } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-stun-grenades",
  styleUrls: ["../../skills.scss", "stun-grenades.scss"],
  shadow: true
})
export class StunGrenadesComponent {

  @Prop({ reflectToAttr: true }) level: number = StunGrenades.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = StunGrenades.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ StunGrenades.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="stun-grenades"></ms-icon>,
      <ms-skill-overlay heading={ StunGrenades.name }
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
          dealing <span>{ StunGrenades.values.damage[this.level] }%</span> fire damage
          to <span>5</span> enemies within <span>{ StunGrenades.values.range[this.level] }</span> m
          and has a <span>{ StunGrenades.values.stun[this.level] }%</span> chance to stun.
          Consumes <span>6</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
