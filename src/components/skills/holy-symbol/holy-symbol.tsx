import { Component, Prop } from "@stencil/core";
import { HolySymbolValues } from "../../../global/values/priest";

@Component({
  tag: "ms-holy-symbol",
  styleUrls: ["../skills.scss", "holy-symbol.scss"],
  shadow: true
})
export class HolySymbolComponent {

  @Prop({ reflectToAttr: true }) level: number = HolySymbolValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = HolySymbolValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Celestial Guardian [Level 6+]`,
      `Celestial Blessings [Level 3+]`,
    ];
  }

  getLevel(): number {
    return HolySymbolValues.levelRequirement[this.level];
  }

  getSpiritRecovery(): number {
    return HolySymbolValues.spirit[this.level];
  }

  getIncreases(): number {
    return HolySymbolValues.increase[this.level];
  }

  getAccuracy(): number {
    return HolySymbolValues.accuracy[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="holy-symbol"></ms-icon>
        }
        <ms-skill-overlay heading="Holy Symbol"
                          element="Holy"
                          level={ this.level }
                          requirements={ this.getRequirements() }
                          cooldown={ 180 }>
          <ms-icon slot="icon" name="holy-symbol"></ms-icon>
          <div slot="description">
            Create a magic seal with a <span>4.5</span> m radius
            that lasts <span>10</span> sec and affects up to <span>10</span> allies standing on it.
            Grants a blessing that restores <span>{ this.getSpiritRecovery() }</span> spirit per sec
            and increases physical damage, magic damage, and attack speed
            by <span>{ this.getIncreases() }%</span> and accuracy
            by <span>{ this.getAccuracy() }</span> for <span>10</span> sec.
            Once applied, the blessing has a <span>3</span> min cooldown.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
