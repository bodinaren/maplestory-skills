import { Component, Prop } from "@stencil/core";
import { ShieldOfTheArchonValues } from "../../../global/values/priest";

@Component({
  tag: "ms-shield-of-the-archon",
  styleUrls: ["../skills.scss", "shield-of-the-archon.scss"],
  shadow: true
})
export class ShieldOfTheArchonComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldOfTheArchonValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldOfTheArchonValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShieldOfTheArchonValues.levelRequirement[this.level] }+`,
      `Celestial Light [Level 3+]`,
      `Holy Blast [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shield-of-the-archon"></ms-icon>,
      <ms-skill-overlay heading="Shield of the Archon"
                        element="Holy"
                        level={ this.level }
                        type="Close Range / Magic"
                        requirements={ this.getRequirements() }
                        cooldown={ 18 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-of-the-archon"></ms-icon>
        <div slot="description">
          Conjure a shield of judgment for <span>5</span> sec,
          increasing physical resistance and magic resistance
          by <span>{ ShieldOfTheArchonValues.resistance[this.level] }</span> and
          dealing <span>{ ShieldOfTheArchonValues.damage[this.level] }%</span> holy damage
          to <span>5</span> enemies within <span>3</span> m.
        </div>
      </ms-skill-overlay>
    ];
  }
}
