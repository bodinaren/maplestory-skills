import { Component, Prop } from "@stencil/core";
import { BronzeEagle } from "../../../../global/values/archer";

@Component({
  tag: "ms-bronze-eagle",
  styleUrls: ["../../skills.scss", "bronze-eagle.scss"],
  shadow: true
})
export class BronzeEagleComponent {

  @Prop({ reflectToAttr: true }) level: number = BronzeEagle.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = BronzeEagle.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ BronzeEagle.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="bronze-eagle"></ms-icon>,
      <ms-skill-overlay heading={ BronzeEagle.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="bronze-eagle"></ms-icon>
        <div slot="description">
          Bronze Eagle, your companion from the Green Hoods, has a <span>100%</span> chance
          to fly by your side for <span>15</span> sec when you land a critical hit.
          He increases your Dexterity by <span>{ BronzeEagle.values.dexterity[this.level] }%</span> and
          awaits your command. Once he appears, he cannot return again for <span>18</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
