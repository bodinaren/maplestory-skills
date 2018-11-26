import { Component, Prop } from "@stencil/core";
import { RocketLauncherValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-rocket-launcher",
  styleUrls: ["../../skills.scss", "rocket-launcher.scss"],
  shadow: true
})
export class RocketLauncherComponent {

  @Prop({ reflectToAttr: true }) level: number = RocketLauncherValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RocketLauncherValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RocketLauncherValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="rocket-launcher"></ms-icon>,
      <ms-skill-overlay heading="Rocket Launcher"
                        element="Fire"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        spirit={ 20 }
                        cooldown={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="rocket-launcher"></ms-icon>
        <div slot="description">
          Fire a missile at the closest enemy up to <span>9</span> m in front of you.
          The rocket deals <span>{ RocketLauncherValues.damage[this.level] }%</span> fire damage
          to the target, then explodes to
          deal <span>{ RocketLauncherValues.aoeDamage[this.level] }%</span> fire damage
          to <span>8</span> enemies within <span>3</span> m.
          The area of the explosion burns
          for <span>{ RocketLauncherValues.burnDuration[this.level] }</span> sec,
          dealing <span>{ RocketLauncherValues.burnDamage[this.level] }%</span> fire damage
          every second to <span>8</span> enemies.
          Consumes <span>20</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
