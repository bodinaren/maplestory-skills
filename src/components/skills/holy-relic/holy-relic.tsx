import { Component, Prop } from "@stencil/core";
import { HolyRelicValues } from "../../../global/values/priest";

@Component({
  tag: "ms-holy-relic",
  styleUrls: ["../skills.scss", "holy-relic.scss"],
  shadow: true
})
export class HolyRelicComponent {

  @Prop({ reflectToAttr: true }) level: number = HolyRelicValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = HolyRelicValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Shield of the Archon [Level 3+]`,
    ];
  }

  getLevel(): number {
    return HolyRelicValues.levelRequirement[this.level];
  }

  getDamage(): number {
    return HolyRelicValues.damage[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="holy-relic"></ms-icon>
        }
        <ms-skill-overlay heading="Holy Relic"
                          element="Holy"
                          level={ this.level }
                          type="Close Range / Magic"
                          requirements={ this.getRequirements() }
                          cooldown={ 15 }>
          <ms-icon slot="icon" name="holy-relic"></ms-icon>
          <div slot="description">
            A holy cross deals <span>{ this.getDamage() }%</span> holy damage
            to <span>8</span> enemies within <span>3</span> m for <span>8</span> sec,
            knocks them back <span>1</span> m,
            and reduces their stamina to <span>0</span>.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
