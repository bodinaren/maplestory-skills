import { Component, Prop } from "@stencil/core";
import { NarubashanLiberationValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-narubashan-liberation",
  styleUrls: ["../../skills.scss", "narubashan-liberation.scss"],
  shadow: true
})
export class NarubashanLiberationComponent {

  @Prop({ reflectToAttr: true }) level: number = NarubashanLiberationValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = NarubashanLiberationValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ NarubashanLiberationValues.levelRequirement[this.level] }+`,
      `AgileArcher [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="narubashan-liberation"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Orb"
                        requirements={ this.getRequirements() }
                        spirit={ 0000 }
                        cooldown={ 0000 }
                        max={ this.max }>
        <ms-icon slot="icon" name="narubashan-liberation"></ms-icon>
        <div slot="description">
          Swing your bow wildly as you spin,
          dealing <span>{ NarubashanLiberationValues.damage[this.level] }%</span> damage
          to <span>8</span> enemies within <span>3</span> m. Deals an
          additional <span>{ NarubashanLiberationValues.additionalDamage[this.level] }%</span> ice damage
          to targets frozen by the Ice Arrow debuff and consumes the effect.
        </div>
      </ms-skill-overlay>
    ];
  }
}
