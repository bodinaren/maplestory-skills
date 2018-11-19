import { Component, Prop } from "@stencil/core";
import { MagicArmorValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-magic-armor",
  styleUrls: ["../../skills.scss", "magic-armor.scss"],
  shadow: true
})
export class MagicArmorComponent {

  @Prop({ reflectToAttr: true }) level: number = MagicArmorValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MagicArmorValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MagicArmorValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="magic-armor"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="magic-armor"></ms-icon>
        <div slot="description">
          Envelop your body with a magical aura, creating a barrier that absorbs damage
          up to <span>{ MagicArmorValues.barrier[this.level] }%</span> of your max health for <span>10</span> sec.
          Cannot be combined with other barrier effects.
        </div>
      </ms-skill-overlay>
    ];
  }
}
