import { Component, Prop } from "@stencil/core";
import { PrecisionShooter } from "../../../../global/values/archer";

@Component({
  tag: "ms-precision-shooter",
  styleUrls: ["../../skills.scss", "precision-shooter.scss"],
  shadow: true
})
export class PrecisionShooterComponent {

  @Prop({ reflectToAttr: true }) level: number = PrecisionShooter.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = PrecisionShooter.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ PrecisionShooter.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="precision-shooter"></ms-icon>,
      <ms-skill-overlay heading={ PrecisionShooter.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="precision-shooter"></ms-icon>
        <div slot="description">
          Increase your aim technique and improve your firing speed.
          Increases attack speed by <span>{ PrecisionShooter.values.speed[this.level] }%</span> and
          improves Screwdriver Shot. Improved Screwdriver Shot can be cast in Snipe mode and inflicts
          greater damage but cannot be reinforced. Also increases improved Screwdriver Shot damage
          by <span>{ PrecisionShooter.values.screwdriver[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
