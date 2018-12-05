import { Component, Prop } from "@stencil/core";
import { ChainLightning } from "../../../../global/values/wizard";

@Component({
  tag: "ms-chain-lightning",
  styleUrls: ["../../skills.scss", "chain-lightning.scss"],
  shadow: true
})
export class ChainLightningComponent {

  @Prop({ reflectToAttr: true }) level: number = ChainLightning.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ChainLightning.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ChainLightning.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="chain-lightning"></ms-icon>,
      <ms-skill-overlay heading={ ChainLightning.name }
                        element="Electric"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Staff"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        max={ this.max }>
        <ms-icon slot="icon" name="chain-lightning"></ms-icon>
        <div slot="description">
          Release an intense electric load that
          deals <span>{ ChainLightning.values.damage[this.level] }%</span> electric damage
          to <span>8</span> enemies up to <span>8</span> m in front of you.
          Enemies hit with this skill <span>5</span> times pulse with electric energy,
          attracting a bolt that deals an
          additional <span>{ ChainLightning.values.additionalDamage[this.level] }%</span> electric damage.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
