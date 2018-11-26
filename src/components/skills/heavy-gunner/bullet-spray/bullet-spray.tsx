import { Component, Prop } from "@stencil/core";
import { BulletSprayValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-bullet-spray",
  styleUrls: ["../../skills.scss", "bullet-spray.scss"],
  shadow: true
})
export class BulletSprayComponent {

  @Prop({ reflectToAttr: true }) level: number = BulletSprayValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BulletSprayValues.maxLevel;

  getRequirements(): string[] {
    if (BulletSprayValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ BulletSprayValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="bullet-spray"></ms-icon>,
      <ms-skill-overlay heading="Bullet Spray"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="bullet-spray"></ms-icon>
        <div slot="description">
          Fire wildly as the cannon's barrel spins,
          dealing <span>{ BulletSprayValues.damage[this.level] }%</span> damage <span>4</span> times
          to the closest enemy up to <span>8</span> m in front of you.
          The bullet cannot pierce multiple enemies.
          Press the skill key again to trigger a <span>2-hit</span> combo.
          On the second hit, the skill lasts while the skill key is held down.
        </div>
      </ms-skill-overlay>
    ];
  }
}
