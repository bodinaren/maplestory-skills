import { Component, Prop } from "@stencil/core";
import { DeepWoundsValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-deep-wounds",
  styleUrls: ["../../skills.scss", "deep-wounds.scss"],
  shadow: true
})
export class DeepWoundsComponent {

  @Prop({ reflectToAttr: true }) level: number = DeepWoundsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeepWoundsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DeepWoundsValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="deep-wounds"></ms-icon>,
      <ms-skill-overlay heading="Deep Wounds"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="deep-wounds"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
