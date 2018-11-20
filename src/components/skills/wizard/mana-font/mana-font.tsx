import { Component, Prop } from "@stencil/core";
import { ManaFontValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-mana-font",
  styleUrls: ["../../skills.scss", "mana-font.scss"],
  shadow: true
})
export class ManaFontComponent {

  @Prop({ reflectToAttr: true }) level: number = ManaFontValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ManaFontValues.maxLevel;

  render() {
    return [
      <ms-icon name="mana-font"></ms-icon>,
      <ms-skill-overlay heading="Mana Font"
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="mana-font"></ms-icon>
        <div slot="description">
          Your fine control over your magical powers allows you to
          recover <span>1</span> spirit every <span>0.3</span> sec at will.
        </div>
      </ms-skill-overlay>
    ];
  }
}
