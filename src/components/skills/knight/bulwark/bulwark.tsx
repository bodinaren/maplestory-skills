import { Component, Prop } from "@stencil/core";
import { BulwarkValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-bulwark",
  styleUrls: ["../../skills.scss", "bulwark.scss"],
  shadow: true
})
export class BulwarkComponent {

  @Prop({ reflectToAttr: true }) level: number = BulwarkValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BulwarkValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BulwarkValues.levelRequirement[this.level] }+`,
      `Shield Wall [Level 4+]`,
      `Warhorn [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="bulwark"></ms-icon>,
      <ms-skill-overlay heading="Bulwark"
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ BulwarkValues.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="bulwark"></ms-icon>
        <div slot="description">
          Create a protective barrier for <span>3</span> sec to
          make <span>{ BulwarkValues.allies[this.level] }</span> allies, including yourself,
          invulnerable to enemy attacks. Some attacks cannot be blocked.
        </div>
      </ms-skill-overlay>
    ];
  }
}
