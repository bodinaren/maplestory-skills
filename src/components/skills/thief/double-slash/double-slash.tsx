import { Component, Prop } from "@stencil/core";
import { DoubleSlash } from "../../../../global/values/thief";

@Component({
  tag: "ms-double-slash",
  styleUrls: ["../../skills.scss", "double-slash.scss"],
  shadow: true
})
export class DoubleSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = DoubleSlash.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DoubleSlash.maxLevel;

  getRequirements(): string[] {
    if (DoubleSlash.levelRequirement[this.level] > 0) {
      return [
        `Level ${ DoubleSlash.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="double-slash"></ms-icon>,
      <ms-skill-overlay heading={ DoubleSlash.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="One-handed Dagger, One-handed Dagger"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="double-slash"></ms-icon>
        <div slot="description">
          Quickly stab with your daggers,
          dealing <span>{ DoubleSlash.values.damage[this.level] }%</span> damage <span>2</span> times
          to <span>3</span> enemies up to <span>3</span> m in front of you.
          Has a <span>{ DoubleSlash.values.cunning[this.level] }%</span> chance to activate Cunning
          for <span>5</span> sec when your attack hits.
          Movement speed increases by <span>30%</span> while Cunning is active, and some skills are enhanced.
          The damage of each attack is affected by the weapon in each hand.
        </div>
      </ms-skill-overlay>
    ];
  }
}
