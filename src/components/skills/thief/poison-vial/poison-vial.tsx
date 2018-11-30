import { Component, Prop } from "@stencil/core";
import { PoisonVial } from "../../../../global/values/thief";

@Component({
  tag: "ms-poison-vial",
  styleUrls: ["../../skills.scss", "poison-vial.scss"],
  shadow: true
})
export class PoisonVialComponent {

  @Prop({ reflectToAttr: true }) level: number = PoisonVial.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = PoisonVial.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ PoisonVial.levelRequirement[this.level] }+`,
      `Double Slash [Level 3+]`,
      `Poison Edge [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="poison-vial"></ms-icon>,
      <ms-skill-overlay heading={ PoisonVial.name }
                        element="Toxic"
                        level={ this.level }
                        type="Long Range / Physical"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="poison-vial"></ms-icon>
        <div slot="description">
          Throw a vial of poison at the closest enemy up to <span>7.5</span> m in front of you,
          dealing <span>{ PoisonVial.values.damage[this.level] }%</span> poison damage.
          The vial breaks on impact, splashing a toxic liquid that poisons <span>5</span> enemies within <span>3</span> m and
          deals <span>{ PoisonVial.values.dot[this.level] }%</span> poison damage every second for <span>10</span> sec.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
