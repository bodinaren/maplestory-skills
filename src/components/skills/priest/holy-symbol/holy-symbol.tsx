import { Component, Prop } from "@stencil/core";
import { HolySymbolValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-symbol",
  styleUrls: ["../../skills.scss", "holy-symbol.scss"],
  shadow: true
})
export class HolySymbolComponent {

  @Prop({ reflectToAttr: true }) level: number = HolySymbolValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HolySymbolValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HolySymbolValues.levelRequirement[this.level] }+`,
      `Celestial Guardian [Level 6+]`,
      `Celestial Blessings [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="holy-symbol"></ms-icon>,
      <ms-skill-overlay heading="Holy Symbol"
                        element="Holy"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 180 }
                        max={ this.max }>
        <ms-icon slot="icon" name="holy-symbol"></ms-icon>
        <div slot="description">
          Create a magic seal with a <span>4.5</span> m radius that lasts <span>10</span> sec
          and affects up to <span>10</span> allies standing on it. Grants a blessing that
          restores <span>{ HolySymbolValues.spirit[this.level] }</span> spirit per sec
          and increases physical damage, magic damage, and attack speed
          by <span>{ HolySymbolValues.increase[this.level] }%</span> and accuracy
          by <span>{ HolySymbolValues.accuracy[this.level] }</span> for <span>10</span> sec.
          Once applied, the blessing has a <span>3</span> min cooldown.
        </div>
      </ms-skill-overlay>
    ];
  }
}
