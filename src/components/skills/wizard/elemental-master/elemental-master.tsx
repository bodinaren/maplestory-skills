import { Component, Prop } from "@stencil/core";
import { ElementalMaster } from "../../../../global/values/wizard";

@Component({
  tag: "ms-elemental-master",
  styleUrls: ["../../skills.scss", "elemental-master.scss"],
  shadow: true
})
export class ElementalMasterComponent {

  @Prop({ reflectToAttr: true }) level: number = ElementalMaster.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ElementalMaster.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ElementalMaster.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="elemental-master"></ms-icon>,
      <ms-skill-overlay heading={ ElementalMaster.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="elemental-master"></ms-icon>
        <div slot="description">
          Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.
          Increases fire, ice, and electric damage by <span>{ ElementalMaster.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
