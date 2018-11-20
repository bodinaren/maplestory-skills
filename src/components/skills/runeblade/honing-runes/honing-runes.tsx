import { Component, Prop } from "@stencil/core";
import { HoningRunesValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-honing-runes",
  styleUrls: ["../../skills.scss", "honing-runes.scss"],
  shadow: true
})
export class HoningRunesComponent {

  @Prop({ reflectToAttr: true }) level: number = HoningRunesValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HoningRunesValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HoningRunesValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="honing-runes"></ms-icon>,
      <ms-skill-overlay heading="Honing Runes"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 180 }
                        max={ this.max }>
        <ms-icon slot="icon" name="honing-runes"></ms-icon>
        <div slot="description">
          Place <span>9</span> runes of honing in a square around you. Allies who touch the runes
          gain <span>{ HoningRunesValues.criticalAllies[this.level] }%</span> critical damage for <span>180</span> sec.
          Increaes your own critical damage by an additional <span>{ HoningRunesValues.criticalSelf[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
