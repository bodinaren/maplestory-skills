import { Component, Prop } from "@stencil/core";
import { StormSigilValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-storm-sigil",
  styleUrls: ["../../skills.scss", "storm-sigil.scss"],
  shadow: true
})
export class StormSigilComponent {

  @Prop({ reflectToAttr: true }) level: number = StormSigilValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = StormSigilValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ StormSigilValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="storm-sigil"></ms-icon>,
      <ms-skill-overlay heading="Storm Sigil"
                        element="Electric"
                        level={ this.level }
                        weaponRequired="Two-handed Blade"
                        requirements={ this.getRequirements() }
                        cooldown={ 1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="storm-sigil"></ms-icon>
        <div slot="description">
          Apply an electric rune to your blade that lasts <span>240</span> sec,
          increasing electric damage by <span>{ StormSigilValues.damage[this.level] }%</span>.
          While active, certain skills become electric skills.
        </div>
      </ms-skill-overlay>
    ];
  }
}
