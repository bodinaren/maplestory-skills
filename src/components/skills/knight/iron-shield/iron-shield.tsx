import { Component, Prop } from "@stencil/core";
import { IronShield } from "../../../../global/values/knight";

@Component({
  tag: "ms-iron-shield",
  styleUrls: ["../../skills.scss", "iron-shield.scss"],
  shadow: true
})
export class IronShieldComponent {

  @Prop({ reflectToAttr: true }) level: number = IronShield.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IronShield.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IronShield.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="iron-shield"></ms-icon>,
      <ms-skill-overlay heading={ IronShield.name }
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="iron-shield"></ms-icon>
        <div slot="description">
          Adopt a defensive stance with your shield, reducing incoming damage
          by <span>{ IronShield.values.reduction[this.level] }%</span>.
          The skill lasts while the skill key is held down,
          although powerful attacks may break the skill early.
          This skill can cancel other skills.
          In PvP zones, the damage reduction is halved.
        </div>
      </ms-skill-overlay>
    ];
  }
}
