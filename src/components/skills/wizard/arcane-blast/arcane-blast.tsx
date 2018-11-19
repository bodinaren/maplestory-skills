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
    return [
      `Level ${ ArcaneBlastValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="arcane-blast"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="arcane-blast"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
