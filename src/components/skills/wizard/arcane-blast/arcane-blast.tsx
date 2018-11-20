import { Component, Prop } from "@stencil/core";
import { ArcaneBlastValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-arcane-blast",
  styleUrls: ["../../skills.scss", "arcane-blast.scss"],
  shadow: true
})
export class ArcaneBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = ArcaneBlastValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ArcaneBlastValues.maxLevel;

  getRequirements(): string[] {
    if (ArcaneBlastValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ ArcaneBlastValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="arcane-blast"></ms-icon>,
      <ms-skill-overlay heading="Arcane Blast"
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
          deals <span>{ ArcaneBlastValues.damage[this.level] }%</span> damage to enemies
          within <span>3</span> m and knocks them back <span>1</span> m.
        </div>
      </ms-skill-overlay>
    ];
  }
}
