import { Component, Prop } from "@stencil/core";
import { ElectromancyValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-electromancy",
  styleUrls: ["../../skills.scss", "electromancy.scss"],
  shadow: true
})
export class ElectromancyComponent {

  @Prop({ reflectToAttr: true }) level: number = ElectromancyValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ElectromancyValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ElectromancyValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="electromancy"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="electromancy"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
