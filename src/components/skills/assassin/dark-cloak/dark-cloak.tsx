import { Component, Prop } from "@stencil/core";
import { DarkCloak } from "../../../../global/values/assassin";

@Component({
  tag: "ms-dark-cloak",
  styleUrls: ["../../skills.scss", "dark-cloak.scss"],
  shadow: true
})
export class DarkCloakComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkCloak.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DarkCloak.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DarkCloak.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="dark-cloak"></ms-icon>,
      <ms-skill-overlay heading={ DarkCloak.name }
                        element="Dark"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ DarkCloak.values.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-cloak"></ms-icon>
        <div slot="description">
          Utilize dark magic to walk in shadows for <span>12</span> sec.
          While hidden, your movement speed increases
          by <span>{ DarkCloak.values.movement[this.level] }%</span> and
          your spirit recovery increases by <span>2</span>.
          While hidden, you can ambush enemies, stunning them for <span>1.5</span> sec.
          Using a skill or an item, or being hit by an enemy, will take you out of hiding.
        </div>
      </ms-skill-overlay>
    ];
  }
}
