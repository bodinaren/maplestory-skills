import { Component, Prop } from "@stencil/core";
import { FlameSigilValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-flame-sigil",
  styleUrls: ["../../skills.scss", "flame-sigil.scss"],
  shadow: true
})
export class FlameSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameSigilValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlameSigilValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlameSigilValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="flame-sigil"></ms-icon>,
      <ms-skill-overlay heading="Flame Sigil"
                        element="Fire"
                        level={ this.level }
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        cooldown={ 1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flame-sigil"></ms-icon>
        <div slot="description">
          Apply a fire rune to your blade that lasts <span>240</span> sec,
          increasing fire damage by <span>{ FlameSigilValues.damage[this.level] }%</span>.
          While active, certain skills become fire skills.
        </div>
      </ms-skill-overlay>
    ];
  }
}
