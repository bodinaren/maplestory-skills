import { Component, Prop } from "@stencil/core";
import { ManaClawValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-mana-claw",
  styleUrls: ["../../skills.scss", "mana-claw.scss"],
  shadow: true
})
export class ManaClawComponent {

  @Prop({ reflectToAttr: true }) level: number = ManaClawValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ManaClawValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ManaClawValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="mana-claw"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="mana-claw"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
