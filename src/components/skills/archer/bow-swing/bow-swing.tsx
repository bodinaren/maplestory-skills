import { Component, Prop } from "@stencil/core";
import { BowSwing } from "../../../../global/values/archer";

@Component({
  tag: "ms-bow-swing",
  styleUrls: ["../../skills.scss", "bow-swing.scss"],
  shadow: true
})
export class BowSwingComponent {

  @Prop({ reflectToAttr: true }) level: number = BowSwing.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BowSwing.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BowSwing.levelRequirement[this.level] }+`,
      `Agile Archer [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="bow-swing"></ms-icon>,
      <ms-skill-overlay heading={ BowSwing.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        cooldown={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="bow-swing"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ BowSwing.values.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ BowSwing.values.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
