import { Component, Prop } from "@stencil/core";
import { ElementalPotencyValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-elemental-potency",
  styleUrls: ["../../skills.scss", "elemental-potency.scss"],
  shadow: true
})
export class ElementalPotencyComponent {

  @Prop({ reflectToAttr: true }) level: number = ElementalPotencyValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ElementalPotencyValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ElementalPotencyValues.levelRequirement[this.level] }+`,
      `Warding Rune [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="elemental-potency"></ms-icon>,
      <ms-skill-overlay heading="Elemental Potency"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="elemental-potency"></ms-icon>
        <div slot="description">
          Amplify your rune power with this secret technique handed down by Master Ishura.
          Increases fire, ice, and electric damage to enemies
          by <span>{ ElementalPotencyValues.damage[this.level] }%</span> for <span>10</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
