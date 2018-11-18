import { Component, Prop } from "@stencil/core";
import { SanctuaryValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-sanctuary",
  styleUrls: ["../../skills.scss", "sanctuary.scss"],
  shadow: true
})
export class SanctuaryComponent {

  @Prop({ reflectToAttr: true }) level: number = SanctuaryValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SanctuaryValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SanctuaryValues.levelRequirement[this.level] }+`,
      `Healing Prayer [Level 3+]`,
      `Scourging Wave [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="sanctuary"></ms-icon>,
      <ms-skill-overlay heading="Sanctuary"
                        element="Holy"
                        level={ this.level }
                        type="Magic"
                        weaponRequired="Off-hand Codex"
                        requirements={ this.getRequirements() }
                        cooldown={ 40 }
                        max={ this.max }>
        <ms-icon slot="icon" name="sanctuary"></ms-icon>
        <div slot="description">
          Sanctify the ground within
          a <span>{ SanctuaryValues.range[this.level] }</span>-tile cross for <span>10</span> sec to
          deal <span>{ SanctuaryValues.damage[this.level] }%</span> damage to enemies and restore health of you and your allies equal
          to <span>{ SanctuaryValues.healing[this.level] }%</span> of your magic attack.
        </div>
      </ms-skill-overlay>
    ];
  }
}
