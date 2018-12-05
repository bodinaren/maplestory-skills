import { Component, Prop } from "@stencil/core";
import { HolySymbol } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-symbol",
  styleUrls: ["../../skills.scss", "holy-symbol.scss"],
  shadow: true
})
export class HolySymbolComponent {

  @Prop({ reflectToAttr: true }) level: number = HolySymbol.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HolySymbol.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HolySymbol.levelRequirement[this.level] }+`,
      `Celestial Guardian [Level 6+]`,
      `Celestial Blessings [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="holy-symbol"></ms-icon>,
      <ms-skill-overlay heading={ HolySymbol.name }
                        element="Holy"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 180 }
                        max={ this.max }>
        <ms-icon slot="icon" name="holy-symbol"></ms-icon>
        <div slot="description">
          Create a magic seal with a <span>4.5</span> m radius that lasts <span>10</span> sec
          and affects up to <span>10</span> allies standing on it. Grants a blessing that
          restores <span>{ HolySymbol.values.spirit[this.level] }</span> spirit per sec
          and increases physical damage, magic damage, and attack speed
          by <span>{ HolySymbol.values.increase[this.level] }%</span> and accuracy
          by <span>{ HolySymbol.values.accuracy[this.level] }</span> for <span>10</span> sec.
          Once applied, the blessing has a <span>3</span> min cooldown.
        </div>
      </ms-skill-overlay>
    ];
  }
}
