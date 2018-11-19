import { Component, Prop } from "@stencil/core";
import { DarkAuraValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-dark-aura",
  styleUrls: ["../../skills.scss", "dark-aura.scss"],
  shadow: true
})
export class DarkAuraComponent {

  @Prop({ reflectToAttr: true }) level: number = DarkAuraValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DarkAuraValues.maxLevel;

  render() {
    return [
      <ms-icon name="dark-aura"></ms-icon>,
      <ms-skill-overlay heading="Dark Aura"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-aura"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
