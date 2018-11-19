import { Component, Prop } from "@stencil/core";
import { DeathSpinValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-death-spin",
  styleUrls: ["../../skills.scss", "death-spin.scss"],
  shadow: true
})
export class DeathSpinComponent {

  @Prop({ reflectToAttr: true }) level: number = DeathSpinValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeathSpinValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DeathSpinValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="death-spin"></ms-icon>,
      <ms-skill-overlay heading="Death Spin"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="death-spin"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
