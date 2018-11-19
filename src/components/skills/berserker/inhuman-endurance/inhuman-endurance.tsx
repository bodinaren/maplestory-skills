import { Component, Prop } from "@stencil/core";
import { InhumanEnduranceValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-inhuman-endurance",
  styleUrls: ["../../skills.scss", "inhuman-endurance.scss"],
  shadow: true
})
export class InhumanEnduranceComponent {

  @Prop({ reflectToAttr: true }) level: number = InhumanEnduranceValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = InhumanEnduranceValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ InhumanEnduranceValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="inhuman-endurance"></ms-icon>,
      <ms-skill-overlay heading="Inhuman Endurance"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="inhuman-endurance"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
