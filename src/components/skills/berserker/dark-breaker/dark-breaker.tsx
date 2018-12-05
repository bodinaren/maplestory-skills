import { Component, Prop } from "@stencil/core";
import { DarkBreaker } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-breaker",
  styleUrls: ["../../skills.scss", "dark-breaker.scss"],
  shadow: true
})
export class DarkBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkBreaker.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DarkBreaker.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DarkBreaker.levelRequirement[this.level] }+`,
      `Raging Slash [Level 4+]`,
      `Void Slash [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="dark-breaker"></ms-icon>,
      <ms-skill-overlay heading={ DarkBreaker.name }
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-breaker"></ms-icon>
        <div slot="description">
          Gather dark power into your greatsword and strike down with great force to
          deal <span>{ DarkBreaker.values.damage[this.level] }%</span> dark damage
          to <span>8</span> enemies within <span>3</span> m.
          The impact area resonates with darkness for <span>5</span> sec,
          dealing <span>{ DarkBreaker.values.dot[this.level] }%</span> dark damage
          to <span>8</span> enemies in range every second.
          This skill can only be used by consuming Dark Aura at max stacks.
          You will be immune to knockback while this skill is active.
        </div>
      </ms-skill-overlay>
    ];
  }
}
