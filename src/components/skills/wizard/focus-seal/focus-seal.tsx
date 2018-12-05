import { Component, Prop } from "@stencil/core";
import { FocusSeal } from "../../../../global/values/wizard";

@Component({
  tag: "ms-focus-seal",
  styleUrls: ["../../skills.scss", "focus-seal.scss"],
  shadow: true
})
export class FocusSealComponent {

  @Prop({ reflectToAttr: true }) level: number = FocusSeal.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FocusSeal.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FocusSeal.levelRequirement[this.level] }+`,
      `Magic Armor [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="focus-seal"></ms-icon>,
      <ms-skill-overlay heading={ FocusSeal.name }
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 45 }
                        max={ this.max }>
        <ms-icon slot="icon" name="focus-seal"></ms-icon>
        <div slot="description">
          Imbue the earth with your magical power, creating a seal that reaches <span>5</span> tiles around you.
          The seal lasts for <span>20</span> sec and increases the physical attack and magic attack of allies
          who absorb it by <span>{ FocusSeal.values.increaseAllies[this.level] }%</span> for <span>180</span> sec.
          Focus Seal also increases the caster's physical and magic attack
          by an additional <span>{ FocusSeal.values.increaseSelf[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
