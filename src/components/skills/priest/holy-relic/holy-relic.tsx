import { Component, Prop } from "@stencil/core";
import { HolyRelicValues } from "../../../../global/values/priest";

@Component({
  tag: "ms-holy-relic",
  styleUrls: ["../../skills.scss", "holy-relic.scss"],
  shadow: true
})
export class HolyRelicComponent {

  @Prop({ reflectToAttr: true }) level: number = HolyRelicValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = HolyRelicValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ HolyRelicValues.levelRequirement[this.level] }+`,
      `Shield of the Archon [Level 3+]`,
    ];
  }

  getLevel(): number {
    return ;
  }

  getDamage(): number {
    return ;
  }

  render() {
    return [
      <ms-icon name="holy-relic"></ms-icon>,
      <ms-skill-overlay heading="Holy Relic"
                        element="Holy"
                        level={ this.level }
                        type="Close Range / Magic"
                        requirements={ this.getRequirements() }
                        cooldown={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="holy-relic"></ms-icon>
        <div slot="description">
          A holy cross deals <span>{ HolyRelicValues.damage[this.level] }%</span> holy damage
          to <span>8</span> enemies within <span>3</span> m for <span>8</span> sec,
          knocks them back <span>1</span> m,
          and reduces their stamina to <span>0</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
