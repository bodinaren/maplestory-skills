import { Component, Prop } from "@stencil/core";
import { GroundBreaker } from "../../../../global/values/berserker";

@Component({
  tag: "ms-ground-breaker",
  styleUrls: ["../../skills.scss", "ground-breaker.scss"],
  shadow: true
})
export class GroundBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = GroundBreaker.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = GroundBreaker.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ GroundBreaker.levelRequirement[this.level] }+`,
      `Raging Slash [Level 4+]`,
      `Death Spin [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ground-breaker"></ms-icon>,
      <ms-skill-overlay heading={ GroundBreaker.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        spirit={ 40 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ground-breaker"></ms-icon>
        <div slot="description">
          Old Ten's specialty move. Strike down your greatsword to
          deal <span>{ GroundBreaker.values.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m and knock them back <span>1.5</span> m.
          If Dark Aura activates, damage increases by <span>16%</span> per stack.
          You will be immune to knockback while this skill is active.
          Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
