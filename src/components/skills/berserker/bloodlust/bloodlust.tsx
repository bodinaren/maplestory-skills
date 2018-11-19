import { Component, Prop } from "@stencil/core";
import { BloodlustValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-bloodlust",
  styleUrls: ["../../skills.scss", "bloodlust.scss"],
  shadow: true
})
export class BloodlustComponent {

  @Prop({ reflectToAttr: true }) level: number = BloodlustValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BloodlustValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BloodlustValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="bloodlust"></ms-icon>,
      <ms-skill-overlay heading="Bloodlust"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="bloodlust"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
