import { Component, Prop } from "@stencil/core";
import { HolyBlastValues } from "../../../global/values/priest";

@Component({
  tag: "ms-holy-blast",
  styleUrls: ["../skills.scss", "holy-blast.scss"],
  shadow: true
})
export class HolyBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = HolyBlastValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = HolyBlastValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    let lvl = this.getLevel();
    if (lvl > 0) {
      return [
        `Level ${ lvl }+`
      ];
    }
  }

  getLevel(): number {
    return HolyBlastValues.levelRequirement[this.level];
  }

  getDamage(): number {
    return HolyBlastValues.damage[this.level];
  }
  getRange(): number {
    return HolyBlastValues.range[this.level];
  }
  getAdditionalDamage(): number {
    return HolyBlastValues.additionalDamage[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="holy-blast"></ms-icon>
        }
        <ms-skill-overlay heading="Holy Blast"
                          element="Holy"
                          level={ this.level }
                          type="Close Range / Magic"
                          weaponRequired="Main Hand Scepter"
                          requirements={ this.getRequirements() }
                          spirit={ 16 }>
          <ms-icon slot="icon" name="holy-blast"></ms-icon>
          <div slot="description">
            An eruption of holy power deals <span>{ this.getDamage() }%</span> holy damage
            to <span>8</span> enemies within <span>{ this.getRange() }</span> m
            and knocks them back <span>0.5</span> m.
            If Celestial Light also activates, it causes an explosion
            that deals an additional <span>{ this.getAdditionalDamage() }%</span> holy damage
            to enemies within <span>2</span> m.
            Consumes <span>16</span> spirit.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
