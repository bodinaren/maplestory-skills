import { Component, Prop } from "@stencil/core";
import { MesoguardPlusValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-mesoguard-plus",
  styleUrls: ["../../skills.scss", "mesoguard-plus.scss"],
  shadow: true
})
export class MesoguardPlusComponent {

  @Prop({ reflectToAttr: true }) level: number = MesoguardPlusValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MesoguardPlusValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MesoguardPlusValues.levelRequirement[this.level] }+`,
      `Quick Step [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="mesoguard-plus"></ms-icon>,
      <ms-skill-overlay heading="Mesoguard Plus"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="mesoguard-plus"></ms-icon>
        <div slot="description">
          Spend <span>777</span> mesos to create a meso shield that lasts <span>4</span> seconds,
          reducing damage taken by <span>{ MesoguardPlusValues.reduction[this.level] }%</span>.
          If Cunning is active, the skill costs no mesos, and Cunning will be removed.
        </div>
      </ms-skill-overlay>
    ];
  }
}
