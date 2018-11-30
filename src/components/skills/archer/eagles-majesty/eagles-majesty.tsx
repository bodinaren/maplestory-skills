import { Component, Prop } from "@stencil/core";
import { EaglesMajesty } from "../../../../global/values/archer";

@Component({
  tag: "ms-eagles-majesty",
  styleUrls: ["../../skills.scss", "eagles-majesty.scss"],
  shadow: true
})
export class EaglesMajestyComponent {

  @Prop({ reflectToAttr: true }) level: number = EaglesMajesty.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = EaglesMajesty.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ EaglesMajesty.levelRequirement[this.level] }+`,
      `Eagle Claw [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="eagles-majesty"></ms-icon>,
      <ms-skill-overlay heading={ EaglesMajesty.name }
                        level={ this.level }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="eagles-majesty"></ms-icon>
        <div slot="description">
          The majesty of eagles
          restores <span>{ EaglesMajesty.values.spirit[this.level] }</span> spirit every second
          for <span>30</span> sec. While this effect is active, Bronze Eagle
          deals <span>{ EaglesMajesty.values.damage[this.level] }%</span> damage when you attack,
          capped at once every <span>3</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
