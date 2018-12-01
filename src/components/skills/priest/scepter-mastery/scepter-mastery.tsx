import { Component, Prop } from "@stencil/core";
import { ScepterMastery } from "../../../../global/values/priest";

@Component({
  tag: "ms-scepter-mastery",
  styleUrls: ["../../skills.scss", "scepter-mastery.scss"],
  shadow: true
})
export class ScepterMasteryComponent {

  @Prop({ reflectToAttr: true }) level: number = ScepterMastery.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ScepterMastery.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ScepterMastery.levelRequirement[this.level] }+`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="scepter-mastery"></ms-icon>,
      <ms-skill-overlay heading={ ScepterMastery.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="scepter-mastery"></ms-icon>
        <div slot="description">
          Your proficiency with scepters increases weapon attack
          by <span>{ ScepterMastery.values.attack[this.level] }%</span> when you have a scepter equipped.
        </div>
      </ms-skill-overlay>
    ];
  }
}
