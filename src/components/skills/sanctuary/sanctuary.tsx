import { Component, Prop } from "@stencil/core";
import { SanctuaryValues } from "../../../global/values/priest";

@Component({
  tag: "ms-sanctuary",
  styleUrls: ["../skills.scss", "sanctuary.scss"],
  shadow: true
})
export class SanctuaryComponent {

  @Prop({ reflectToAttr: true }) level: number = SanctuaryValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = SanctuaryValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Healing Prayer [Level 3+]`,
      `Scourging Wave [Level 3+]`,
    ];
  }

  getLevel(): number {
    return SanctuaryValues.levelRequirement[this.level];
  }

  getRange(): number {
    return SanctuaryValues.range[this.level];
  }

  getDamage(): number {
    return SanctuaryValues.damage[this.level];
  }

  getHealing(): number {
    return SanctuaryValues.healing[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="sanctuary"></ms-icon>
        }
        <ms-skill-overlay heading="Sanctuary"
                          element="Holy"
                          level={ this.level }
                          type="Magic"
                          weaponRequired="Off-hand Codex"
                          requirements={ this.getRequirements() }
                          cooldown={ 40 }>
          <ms-icon slot="icon" name="sanctuary"></ms-icon>
          <div slot="description">
            Sanctify the ground within a <span>{ this.getRange() }</span>-tile cross
            for <span>10</span> sec to deal <span>{ this.getDamage() }%</span> damage to enemies
            and restore health of you and your allies equal to <span>{ this.getHealing() }%</span> of your magic attack.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
