import { Component, Prop } from "@stencil/core";
import { Bulwark } from "../../../../global/values/knight";

@Component({
  tag: "ms-bulwark",
  styleUrls: ["../../skills.scss", "bulwark.scss"],
  shadow: true
})
export class BulwarkComponent {

  @Prop({ reflectToAttr: true }) level: number = Bulwark.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Bulwark.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ Bulwark.levelRequirement[this.level] }+`,
      `Shield Wall [Level 4+]`,
      `Warhorn [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="bulwark"></ms-icon>,
      <ms-skill-overlay heading={ Bulwark.name }
                        element="Holy"
                        level={ this.level }
                        weaponRequired="Off-hand Shield"
                        requirements={ this.getRequirements() }
                        cooldown={ Bulwark.values.cooldown[this.level] }
                        max={ this.max }>
        <ms-icon slot="icon" name="bulwark"></ms-icon>
        <div slot="description">
          Create a protective barrier for <span>3</span> sec to
          make <span>{ Bulwark.values.allies[this.level] }</span> allies, including yourself,
          invulnerable to enemy attacks. Some attacks cannot be blocked.
        </div>
      </ms-skill-overlay>
    ];
  }
}
