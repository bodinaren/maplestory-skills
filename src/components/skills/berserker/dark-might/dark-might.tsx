import { Component, Prop } from "@stencil/core";
import { DarkMight } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-might",
  styleUrls: ["../../skills.scss", "dark-might.scss"],
  shadow: true
})
export class DarkMightComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkMight.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DarkMight.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DarkMight.levelRequirement[this.level] }+`,
      `Raging Slash [Level 6+]`,
      `Ground Breaker [Level 6+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="dark-might"></ms-icon>,
      <ms-skill-overlay heading={ DarkMight.name }
                        element="Dark"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-might"></ms-icon>
        <div slot="description">
          Temporarily amplify Dark Aura to increase attack speed, physical attack, and magic attack
          by <span>{ DarkMight.values.increase[this.level] }%</span> for <span>10</span> sec
          and restore <span>1</span> additional spirit on hit.
          This skill can only be used by consuming Dark Aura at max stacks.
        </div>
      </ms-skill-overlay>
    ];
  }
}
