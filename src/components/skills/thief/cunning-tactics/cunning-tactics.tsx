import { Component, Prop } from "@stencil/core";
import { CunningTacticsValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-cunning-tactics",
  styleUrls: ["../../skills.scss", "cunning-tactics.scss"],
  shadow: true
})
export class CunningTacticsComponent {

  @Prop({ reflectToAttr: true }) level: number = CunningTacticsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CunningTacticsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CunningTacticsValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="cunning-tactics"></ms-icon>,
      <ms-skill-overlay heading="Cunning Tactics"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ CunningTacticsValues.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="cunning-tactics"></ms-icon>
        <div slot="description">
          Using the tricks of the trade, recover <span>{ CunningTacticsValues.spirit[this.level] }%</span> spirit
          and activate Cunning for <span>5</span> sec.
          While Cunning is active, your movement speed increases by <span>30%</span> and some skills can be empowered.
        </div>
      </ms-skill-overlay>
    ];
  }
}
