import { Component, Prop } from "@stencil/core";
import { GatlingFire } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-gatling-fire",
  styleUrls: ["../../skills.scss", "gatling-fire.scss"],
  shadow: true
})
export class GatlingFireComponent {

  @Prop({ reflectToAttr: true }) level: number = GatlingFire.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = GatlingFire.maxLevel;

  getRequirements(): string[] {
    if (GatlingFire.levelRequirement[this.level] > 0) {
      return [
        `Level ${ GatlingFire.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="gatling-fire"></ms-icon>,
      <ms-skill-overlay heading={ GatlingFire.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        spirit={ 5 }
                        max={ this.max }>
        <ms-icon slot="icon" name="gatling-fire"></ms-icon>
        <div slot="description">
          Fire wildly as the cannon's barrel spins,
          dealing <span>{ GatlingFire.values.damage[this.level] }%</span> damage <span>3</span> times
          to <span>5</span> enemies up to <span>8</span> m in front of you.
          This skill uses a special piercing bullet to damage all targets in range.
          Keep pressing the key to trigger a <span>3-hit</span> combo.
          The skill continues to alternate between the second and third hit while the skill key is held down.
          Consumes <span>5</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
