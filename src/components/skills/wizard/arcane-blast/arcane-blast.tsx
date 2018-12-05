import { Component, Prop } from "@stencil/core";
import { ArcaneBlast } from "../../../../global/values/wizard";

@Component({
  tag: "ms-arcane-blast",
  styleUrls: ["../../skills.scss", "arcane-blast.scss"],
  shadow: true
})
export class ArcaneBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = ArcaneBlast.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ArcaneBlast.maxLevel;

  getRequirements(): string[] {
    if (ArcaneBlast.levelRequirement[this.level] > 0) {
      return [
        `Level ${ ArcaneBlast.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="arcane-blast"></ms-icon>,
      <ms-skill-overlay heading={ ArcaneBlast.name }
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Staff"
                        requirements={ this.getRequirements() }
                        cooldown={ 6 }
                        max={ this.max }>
        <ms-icon slot="icon" name="arcane-blast"></ms-icon>
        <div slot="description">
          Focus a magical aura on a spot <span>4.5</span> m in front of you,
          creating an explosion of energy that
          deals <span>{ ArcaneBlast.values.damage[this.level] }%</span> damage to enemies
          within <span>3</span> m and knocks them back <span>1</span> m.
        </div>
      </ms-skill-overlay>
    ];
  }
}
