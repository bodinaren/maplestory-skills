import { Component, Prop } from "@stencil/core";
import { PrecisionShooterValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-precision-shooter",
  styleUrls: ["../../skills.scss", "precision-shooter.scss"],
  shadow: true
})
export class PrecisionShooterComponent {

  @Prop({ reflectToAttr: true }) level: number = PrecisionShooterValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = PrecisionShooterValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ PrecisionShooterValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="precision-shooter"></ms-icon>,
      <ms-skill-overlay heading="Precision Shooter"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="precision-shooter"></ms-icon>
        <div slot="description">
          Increase your aim technique and improve your firing speed.
          Increases attack speed by <span>{ PrecisionShooterValues.speed[this.level] }%</span> and
          improves Screwdriver Shot. Improved Screwdriver Shot can be cast in Snipe mode and inflicts
          greater damage but cannot be reinforced. Also increases improved Screwdriver Shot damage
          by <span>{ PrecisionShooterValues.screwdriver[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
