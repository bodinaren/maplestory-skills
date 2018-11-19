import { Component, Prop } from "@stencil/core";
import { FocusSealValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-focus-seal",
  styleUrls: ["../../skills.scss", "focus-seal.scss"],
  shadow: true
})
export class FocusSealComponent {

  @Prop({ reflectToAttr: true }) level: number = FocusSealValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FocusSealValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FocusSealValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="focus-seal"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="focus-seal"></ms-icon>
        <div slot="description">
          Imbue the earth with your magical power, creating a seal that reaches 5 tiles around you.
          The seal lasts for <span>20</span> sec and increases the physical attack and magic attack of allies
          who absorb it by <span>{ FocusSealValues.increaseAllies[this.level] }%</span> for <span>180</span> sec.
          Focus Seal also increases physical and magic attack
          by <span>{ FocusSealValues.increaseSelf[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
