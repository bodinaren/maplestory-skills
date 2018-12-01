import { Component, Prop } from "@stencil/core";
import { FrostSigil } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-frost-sigil",
  styleUrls: ["../../skills.scss", "frost-sigil.scss"],
  shadow: true
})
export class FrostSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = FrostSigil.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FrostSigil.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FrostSigil.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="frost-sigil"></ms-icon>,
      <ms-skill-overlay heading={ FrostSigil.name }
                        element="Ice"
                        level={ this.level }
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        cooldown={ 1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="frost-sigil"></ms-icon>
        <div slot="description">
          Apply an ice rune to your blade that lasts <span>240</span> sec, increasing
          ice damage by <span>{ FrostSigil.values.damage[this.level] }%</span>.
          While active, certain skills become ice skills.
        </div>
      </ms-skill-overlay>
    ];
  }
}
