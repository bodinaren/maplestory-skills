import { Component, Prop } from "@stencil/core";
import { PoisonEdgeValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-poison-edge",
  styleUrls: ["../../skills.scss", "poison-edge.scss"],
  shadow: true
})
export class PoisonEdgeComponent {

  @Prop({ reflectToAttr: true }) level: number = PoisonEdgeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = PoisonEdgeValues.maxLevel;

  getRequirements(): string[] {
    if (PoisonEdgeValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ PoisonEdgeValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="poison-edge"></ms-icon>,
      <ms-skill-overlay heading="Poison Edge"
                        element="Toxic"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger, One-handed Dagger"
                        requirements={ this.getRequirements() }
                        spirit={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="poison-edge"></ms-icon>
        <div slot="description">
          Swing your poison-coated daggers,
          dealing <span>{ PoisonEdgeValues.firstDamage[this.level] }%</span> poison damage
          to <span>5</span> enemies up to <span>3</span> m in front of you.
          Keep pressing the key to trigger a <span>5-hit</span> combo.
          The fifth hit deals <span>{ PoisonEdgeValues.fifthDamage[this.level] }%</span> poison damage
          and moves you <span>3</span> m in the direction you select.
          When Cunning is active, this skill is empowered.
          Consumes <span>10</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
