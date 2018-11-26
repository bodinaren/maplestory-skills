import { Component, Prop } from "@stencil/core";
import { LockOnValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-lock-on",
  styleUrls: ["../../skills.scss", "lock-on.scss"],
  shadow: true
})
export class LockOnComponent {

  @Prop({ reflectToAttr: true }) level: number = LockOnValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = LockOnValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ LockOnValues.levelRequirement[this.level] }+`,
      `Bullet Spray [Level 4+]`,
      `Gatling Fire [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="lock-on"></ms-icon>,
      <ms-skill-overlay heading="Lock-on"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="lock-on"></ms-icon>
        <div slot="description">
          Take a shooting stance, aiming at the closest target up to <span>8</span> m in
          front of you and shooting a special bullet that
          deals <span>{ LockOnValues.damage[this.level] }%</span> damage,
          pierces the target up to <span>8</span> times, and can damage enemies behind the target.
          Consumes <span>5</span>1 spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
