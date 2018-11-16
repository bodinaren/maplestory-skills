import { Component, Prop } from "@stencil/core";
import { SmitingAuraValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-smiting-aura",
  styleUrls: ["../skills.scss", "smiting-aura.scss"],
  shadow: true
})
export class SmitingAuraComponent {

  @Prop({ reflectToAttr: true }) level: number = SmitingAuraValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SmitingAuraValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SmitingAuraValues.levelRequirement[this.level] }+`,
      `Celestial Light [Level 4+]`,
      `Sactuary [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="smiting-aura"></ms-icon>,
      <ms-skill-overlay heading="Smiting Aura"
                        element="Holy"
                        level={ this.level }
                        type="Long Range / Magic"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="smiting-aura"></ms-icon>
        <div slot="description">
          Surround the nearest enemy within <span>8</span> m in front of you with holy power,
          dealing <span>{ SmitingAuraValues.damage[this.level] }%</span> damage to <span>3</span> enemies
          within <span>1.5</span> m of the target and increasing the damage taken
          by the target by <span>{ SmitingAuraValues.damageIncrease[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
