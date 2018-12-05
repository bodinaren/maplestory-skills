import { Component, Prop } from "@stencil/core";
import { CunningTactics } from "../../../../global/values/thief";

@Component({
  tag: "ms-cunning-tactics",
  styleUrls: ["../../skills.scss", "cunning-tactics.scss"],
  shadow: true
})
export class CunningTacticsComponent {

  @Prop({ reflectToAttr: true }) level: number = CunningTactics.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CunningTactics.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CunningTactics.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="cunning-tactics"></ms-icon>,
      <ms-skill-overlay heading={ CunningTactics.name }
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ CunningTactics.values.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="cunning-tactics"></ms-icon>
        <div slot="description">
          Using the tricks of the trade, recover <span>{ CunningTactics.values.spirit[this.level] }%</span> spirit
          and activate Cunning for <span>5</span> sec.
          While Cunning is active, your movement speed increases by <span>30%</span> and some skills can be empowered.
        </div>
      </ms-skill-overlay>
    ];
  }
}
