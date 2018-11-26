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

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="dark-aura" sp={ true }></ms-icon>,
      <ms-skill-overlay heading="Dark Aura"
                        element="Dark"
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="dark-aura" sp={ true }></ms-icon>
        <div slot="description">
          Your latent dark power restores <span>10</span> spirit every second.
          Dark Aura stacks on hit, up to once per second, up to <span>10</span> times total.
          Each stack increases the amount restored by an additional <span>1</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
