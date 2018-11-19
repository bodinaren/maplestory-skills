import { Component, Prop } from "@stencil/core";
import { RagingSlashValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-raging-slash",
  styleUrls: ["../../skills.scss", "raging-slash.scss"],
  shadow: true
})
export class RagingSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = RagingSlashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RagingSlashValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RagingSlashValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="raging-slash"></ms-icon>,
      <ms-skill-overlay heading="Raging Slash"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="raging-slash"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
