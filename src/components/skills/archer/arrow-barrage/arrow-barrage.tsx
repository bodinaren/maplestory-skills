import { Component, Prop } from "@stencil/core";
import { ArrowBarrage } from "../../../../global/values/archer";

@Component({
  tag: "ms-arrow-barrage",
  styleUrls: ["../../skills.scss", "arrow-barrage.scss"],
  shadow: true
})
export class ArrowBarrageComponent {

  @Prop({ reflectToAttr: true }) level: number = ArrowBarrage.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ArrowBarrage.maxLevel;

  getRequirements(): string[] {
    if (ArrowBarrage.levelRequirement[this.level] > 0) {
      return [
        `Level ${ ArrowBarrage.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="arrow-barrage"></ms-icon>,
      <ms-skill-overlay heading={ ArrowBarrage.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        spirit={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="arrow-barrage"></ms-icon>
        <div slot="description">
          Fire several arrows at once,
          dealing <span>{ ArrowBarrage.values.firstDamage[this.level] }%</span> damage to <span>8</span> enemies
          up to <span>7</span> m. Keep pressing the key to trigger a <span>3-hit</span> combo. The second shot does
          the same as the first. You perform a reverse somersault on the third and rapidly fire arrows,
          dealing <span>{ ArrowBarrage.values.thirdDamage[this.level] }%</span> damage <span>3</span> times.
          Consumes <span>12</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
