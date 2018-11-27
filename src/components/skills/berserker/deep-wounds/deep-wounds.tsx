import { Component, Prop } from "@stencil/core";
import { DeepWoundsValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-deep-wounds",
  styleUrls: ["../../skills.scss", "deep-wounds.scss"],
  shadow: true
})
export class DeepWoundsComponent {

  @Prop({ reflectToAttr: true }) level: number = DeepWoundsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeepWoundsValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DeepWoundsValues.levelRequirement[this.level] }+`,
      `Greatsword Mastery [Level 6+]`,
      `Intimidation [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="deep-wounds"></ms-icon>,
      <ms-skill-overlay heading="Deep Wounds"
                        level={ this.level }
                        passive={ true }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="deep-wounds"></ms-icon>
        <div slot="description">
          Critical attacks inflicted with a greatsword make the enemy bleed,
          dealing <span>{ DeepWoundsValues.damage[this.level] }%</span> damage
          every second for <span>10</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
