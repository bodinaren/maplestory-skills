import { Component, Prop } from "@stencil/core";
import { BronzeEagleValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-bronze-eagle",
  styleUrls: ["../../skills.scss", "bronze-eagle.scss"],
  shadow: true
})
export class BronzeEagleComponent {

  @Prop({ reflectToAttr: true }) level: number = BronzeEagleValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BronzeEagleValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BronzeEagleValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="bronze-eagle"></ms-icon>,
      <ms-skill-overlay heading="Bronze Eagle"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="bronze-eagle"></ms-icon>
        <div slot="description">
          Bronze Eagle, your companion from the Green Hoods, has a <span>100%</span> chance
          to fly by your side for <span>15</span> sec when you land a critical hit.
          He increases your Dexterity by <span>{ BronzeEagleValues.dexterity[this.level] }%</span> and
          awaits your command. Once he appears, he cannot return again for <span>18</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
