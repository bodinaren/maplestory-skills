import { Component, Prop } from "@stencil/core";
import { ElementalMasterValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-elemental-master",
  styleUrls: ["../../skills.scss", "elemental-master.scss"],
  shadow: true
})
export class ElementalMasterComponent {

  @Prop({ reflectToAttr: true }) level: number = ElementalMasterValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ElementalMasterValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ElementalMasterValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="elemental-master"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="elemental-master"></ms-icon>
        <div slot="description">
          Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.
          Increases fire, ice, and electric damage by <span>{ ElementalMasterValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
