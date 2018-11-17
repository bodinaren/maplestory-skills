import { Component, Prop } from "@stencil/core";
import { BowSwingValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-bow-swing",
  styleUrls: ["../../skills.scss", "bow-swing.scss"],
  shadow: true
})
export class BowSwingComponent {

  @Prop({ reflectToAttr: true }) level: number = BowSwingValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BowSwingValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BowSwingValues.levelRequirement[this.level] }+`,
      `Agile Archer [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="bow-swing"></ms-icon>,
      <ms-skill-overlay heading="Bow Swing"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        cooldown={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="bow-swing"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ BowSwingValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ BowSwingValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
