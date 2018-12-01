import { Component, Prop } from "@stencil/core";
import { MBomb } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-m-bomb",
  styleUrls: ["../../skills.scss", "m-bomb.scss"],
  shadow: true
})
export class MBombComponent {

  @Prop({ reflectToAttr: true }) level: number = MBomb.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MBomb.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MBomb.levelRequirement[this.level] }+`,
      `Homing Missiles [Level 5+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="m-bomb"></ms-icon>,
      <ms-skill-overlay heading={ MBomb.name }
                        element="Fire"
                        level={ this.level }
                        type="Long Range / Physical"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="m-bomb"></ms-icon>
        <div slot="description">
          Call in a high-tech bomb to drop <span>7.5</span> m in front of you,
          which deals <span>{ MBomb.values.damage[this.level] }%</span> fire damage
          to <span>8</span> enemies within <span>3</span> m.
          A second blast occurs after <span>0.5</span> sec,
          dealing <span>{ MBomb.values.additionalDamage[this.level] }%</span> fire damage
          to <span>8</span> enemies within <span>6</span> m.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
