import { Component, Prop } from "@stencil/core";
import { CycloneBomberValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-cyclone-bomber",
  styleUrls: ["../../skills.scss", "cyclone-bomber.scss"],
  shadow: true
})
export class CycloneBomberComponent {

  @Prop({ reflectToAttr: true }) level: number = CycloneBomberValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = CycloneBomberValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ CycloneBomberValues.levelRequirement[this.level] }+`,
      `Chain Spear [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="cyclone-bomber"></ms-icon>,
      <ms-skill-overlay heading="Cyclone Bomber"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        cooldown={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="cyclone-bomber"></ms-icon>
        <div slot="description">
          Adjust the flow of the atmosphere, causing a whirlwind <span>6</span> m ahead.
          The whirlwind rages every <span>0.2</span> sec (<span>4</span> times total),
          dealing <span>{ CycloneBomberValues.dot[this.level] }%</span> damage
          to <span>8</span> enemies within a <span>3</span> m radius and gathering them at its center.
          The condensed energy in the eye of the whirlwind explodes after <span>1</span> sec,
          dealing <span>{ CycloneBomberValues.additionalDamage[this.level] }%</span> damage
          to <span>8</span> enemies within a <span>3</span> m radius.
          Enemies caught in the explosion lose their coordination
          and have their accuracy and evasion decreased
          by <span>{ CycloneBomberValues.reduction[this.level] }</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
