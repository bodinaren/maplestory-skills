import { Component, Prop } from "@stencil/core";
import { VoidSlashValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-void-slash",
  styleUrls: ["../../skills.scss", "void-slash.scss"],
  shadow: true
})
export class VoidSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = VoidSlashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = VoidSlashValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ VoidSlashValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="void-slash"></ms-icon>,
      <ms-skill-overlay heading="Void Slash"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="void-slash"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
