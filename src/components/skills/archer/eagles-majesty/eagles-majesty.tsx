import { Component, Prop } from "@stencil/core";
import { EaglesMajestyValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagles-majesty",
  styleUrls: ["../../skills.scss", "eagles-majesty.scss"],
  shadow: true
})
export class EaglesMajestyComponent {

  @Prop({ reflectToAttr: true }) level: number = EaglesMajestyValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EaglesMajestyValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ EaglesMajestyValues.levelRequirement[this.level] }+`,
      `Eagle Claw [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="eagles-majesty"></ms-icon>,
      <ms-skill-overlay heading="Eagle's Majesty"
                        level={ this.level }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="eagles-majesty"></ms-icon>
        <div slot="description">
          The majesty of eagles
          restores <span>{ EaglesMajestyValues.spirit[this.level] }</span> spirit every second
          for <span>30</span> sec. While this effect is active, Bronze Eagle
          deals <span>{ EaglesMajestyValues.damage[this.level] }%</span> damage when you attack,
          capped at once every <span>3</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
