import { Component, Prop } from "@stencil/core";
import { AngelicRay } from "../../../../global/values/priest";

@Component({
  tag: "ms-angelic-ray",
  styleUrls: ["../../skills.scss", "angelic-ray.scss"],
  shadow: true
})
export class AngelicRayComponent {

  @Prop({ reflectToAttr: true }) level: number = AngelicRay.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = AngelicRay.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ AngelicRay.levelRequirement[this.level] }+`,
      `Scepter Mastery [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="angelic-ray"></ms-icon>,
      <ms-skill-overlay heading={ AngelicRay.name }
                        element="Holy"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Main Hand Scepter, Off-hand Codex"
                        requirements={ this.getRequirements() }
                        spirit={ 30 }
                        cooldown={ 10 }
                        max={ this.max }>
        <ms-icon slot="icon" name="angelic-ray"></ms-icon>
        <div slot="description">
          Fire a beam of holy light,
          dealing <span>{ AngelicRay.values.damage[this.level] }%</span> holy damage
          to <span>8</span> enemies up to <span>12</span> m in front of you.
          Restores health to <span>8</span> allies hit equal
          to <span>{ AngelicRay.values.healing[this.level] }%</span> of your magic attack.
          Consumes <span>30</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
