import { Component, Prop } from "@stencil/core";
import { RagingSlash } from "../../../../global/values/berserker";

@Component({
  tag: "ms-raging-slash",
  styleUrls: ["../../skills.scss", "raging-slash.scss"],
  shadow: true
})
export class RagingSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = RagingSlash.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RagingSlash.maxLevel;

  getRequirements(): string[] {
    if (RagingSlash.levelRequirement[this.level] > 0) {
      return [
        `Level ${ RagingSlash.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="raging-slash"></ms-icon>,
      <ms-skill-overlay heading={ RagingSlash.name }
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="raging-slash"></ms-icon>
        <div slot="description">
          Swing your weapon to deal <span>{ RagingSlash.values.damage[this.level] }%</span> dark damage
          to <span>5</span> enemies up to <span>3</span> m in front of you.
          Keep pressing the key to trigger a <span>3-hit</span> combo.
          The attack speed increases with each hit.
          The third hit is a double strike, and when finished you start over from the beginning.
          During the attack, press a direction key to move <span>0.6</span> m.
        </div>
      </ms-skill-overlay>
    ];
  }
}
