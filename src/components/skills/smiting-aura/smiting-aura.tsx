import { Component, Prop } from "@stencil/core";
import { SmitingAuraValues } from "../../../global/values/priest";

@Component({
  tag: "ms-smiting-aura",
  styleUrls: ["../skills.scss", "smiting-aura.scss"],
  shadow: true
})
export class SmitingAuraComponent {

  @Prop({ reflectToAttr: true }) level: number = SmitingAuraValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = SmitingAuraValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Celestial Light [Level 4+]`,
      `Sactuary [Level 3+]`,
    ];
  }

  getLevel(): number {
    return SmitingAuraValues.levelRequirement[this.level];
  }

  getDamage(): number {
    return SmitingAuraValues.damage[this.level];
  }

  getDamageIncrease(): number {
    return SmitingAuraValues.damageIncrease[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="smiting-aura"></ms-icon>
        }
        <ms-skill-overlay heading="Smiting Aura"
                          element="Holy"
                          level={ this.level }
                          type="Long Range / Magic"
                          requirements={ this.getRequirements() }>
          <ms-icon slot="icon" name="smiting-aura"></ms-icon>
          <div slot="description">
            Surround the nearest enemy within <span>8</span> m in front of you with holy power,
            dealing <span>{ this.getDamage() }%</span> damage to <span>3</span> enemies
            within <span>1.5</span> m of the target and increasing the damage taken
            by the target by <span>{ this.getDamageIncrease() }%</span>.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
