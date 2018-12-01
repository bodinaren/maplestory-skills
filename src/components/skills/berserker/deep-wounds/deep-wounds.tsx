import { Component, Prop } from "@stencil/core";
import { DeepWounds } from "../../../../global/values/berserker";

@Component({
  tag: "ms-deep-wounds",
  styleUrls: ["../../skills.scss", "deep-wounds.scss"],
  shadow: true
})
export class DeepWoundsComponent {

  @Prop({ reflectToAttr: true }) level: number = DeepWounds.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeepWounds.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DeepWounds.levelRequirement[this.level] }+`,
      `Greatsword Mastery [Level 6+]`,
      `Intimidation [Level 4+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="deep-wounds"></ms-icon>,
      <ms-skill-overlay heading={ DeepWounds.name }
                        level={ this.level }
                        passive={ true }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="deep-wounds"></ms-icon>
        <div slot="description">
          Critical attacks inflicted with a greatsword make the enemy bleed,
          dealing <span>{ DeepWounds.values.damage[this.level] }%</span> damage
          every second for <span>10</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
