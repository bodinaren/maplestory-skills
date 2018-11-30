import { Component, Prop } from "@stencil/core";
import { BlastChargeKit } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-blast-charge-kit",
  styleUrls: ["../../skills.scss", "blast-charge-kit.scss"],
  shadow: true
})
export class BlastChargeKitComponent {

  @Prop({ reflectToAttr: true }) level: number = BlastChargeKit.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BlastChargeKit.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BlastChargeKit.levelRequirement[this.level] }+`,
      `Electric Blast [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="blast-charge-kit"></ms-icon>,
      <ms-skill-overlay heading={ BlastChargeKit.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="blast-charge-kit"></ms-icon>
        <div slot="description">
          Equip your cannon with a blast charge kit to optimize Electric Blast's output power and efficiency.
          Electric Blast can be cast repeatedly without cooling down in between, at the cost of lowered damage and spirit.
          Blast Charge Kit increases the rapid-firing Electric Blast damage
          by <span>{ BlastChargeKit.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
