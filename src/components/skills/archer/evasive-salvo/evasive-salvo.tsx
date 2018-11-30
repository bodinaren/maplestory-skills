import { Component, Prop } from "@stencil/core";
import { EvasiveSalvoValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-evasive-salvo",
  styleUrls: ["../../skills.scss", "evasive-salvo.scss"],
  shadow: true
})
export class EvasiveSalvoComponent {

  @Prop({ reflectToAttr: true }) level: number = EvasiveSalvoValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EvasiveSalvoValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ EvasiveSalvoValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="evasive-salvo"></ms-icon>,
      <ms-skill-overlay heading={ EvasiveSalvoValues.name }
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Bow"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="evasive-salvo"></ms-icon>
        <div slot="description">
          Swiftly jump back <span>3</span> m and fire <span>3</span> volleys of arrows.
          The arrows are <span>2</span> m apart and
          deal <span>{ EvasiveSalvoValues.damage[this.level] }%</span> damage each to up to <span>5</span> enemies.
          All three volleys have a <span>40%</span> chance to be critical regardless of your critical rate.
          This skill can cancel other skills. You will be immune to knockback while this skill is active.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
