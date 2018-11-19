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
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="dark-breaker"></ms-icon>,
      <ms-skill-overlay heading="Dark Breaker"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-breaker"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
