import { Component, Prop } from "@stencil/core";
import { GroundBreakerValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-ground-breaker",
  styleUrls: ["../../skills.scss", "ground-breaker.scss"],
  shadow: true
})
export class GroundBreakerComponent {

  @Prop({ reflectToAttr: true }) level: number = GroundBreakerValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = GroundBreakerValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ GroundBreakerValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="ground-breaker"></ms-icon>,
      <ms-skill-overlay heading="Ground Breaker"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="ground-breaker"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
