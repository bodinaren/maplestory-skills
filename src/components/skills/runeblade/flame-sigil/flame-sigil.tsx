import { Component, Prop } from "@stencil/core";
import { FlameSigil } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-flame-sigil",
  styleUrls: ["../../skills.scss", "flame-sigil.scss"],
  shadow: true
})
export class FlameSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameSigil.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlameSigil.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlameSigil.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="flame-sigil"></ms-icon>,
      <ms-skill-overlay heading={ FlameSigil.name }
                        element="Fire"
                        level={ this.level }
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        cooldown={ 1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flame-sigil"></ms-icon>
        <div slot="description">
          Apply a fire rune to your blade that lasts <span>240</span> sec,
          increasing fire damage by <span>{ FlameSigil.values.damage[this.level] }%</span>.
          While active, certain skills become fire skills.
        </div>
      </ms-skill-overlay>
    ];
  }
}
