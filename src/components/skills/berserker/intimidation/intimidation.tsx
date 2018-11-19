import { Component, Prop } from "@stencil/core";
import { IntimidationValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-intimidation",
  styleUrls: ["../../skills.scss", "intimidation.scss"],
  shadow: true
})
export class IntimidationComponent {

  @Prop({ reflectToAttr: true }) level: number = IntimidationValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IntimidationValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IntimidationValues.levelRequirement[this.level] }+`,
      `¤¤¤`,
    ];
  }

  render() {
    return [
      <ms-icon name="intimidation"></ms-icon>,
      <ms-skill-overlay heading="Intimidation"
                        level={ this.level }
                        type="¤¤¤"
                        weaponRequired="¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ -1 }
                        cooldown={ -1 }
                        max={ this.max }>
        <ms-icon slot="icon" name="intimidation"></ms-icon>
        <div slot="description">
        </div>
      </ms-skill-overlay>
    ];
  }
}
