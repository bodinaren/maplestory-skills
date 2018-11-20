import { Component, Prop } from "@stencil/core";
import { DarkBreakerValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-breaker",
  styleUrls: ["../../skills.scss", "dark-breaker.scss"],
  shadow: true
})
export class DarkBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkBreakerValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DarkBreakerValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DarkBreakerValues.levelRequirement[this.level] }+`,
      `Raging Slash [Level 4+]`,
      `Void Slash [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="dark-breaker"></ms-icon>,
      <ms-skill-overlay heading="Dark Breaker"
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-breaker"></ms-icon>
        <div slot="description">
          Gather dark power into your greatsword and strike down with great force to
          deal <span>{ DarkBreakerValues.damage[this.level] }%</span> dark damage
          to <span>8</span> enemies within <span>3</span> m.
          The impact area resonates with darkness for <span>5</span> sec,
          dealing <span>{ DarkBreakerValues.dot[this.level] }%</span> dark damage
          to <span>8</span> enemies in range every second.
          This skill can only be used by consuming Dark Aura at max stacks.
          You will be immune to knockback while this skill is active.
        </div>
      </ms-skill-overlay>
    ];
  }
}
