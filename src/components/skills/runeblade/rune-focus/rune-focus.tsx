import { Component, Prop } from "@stencil/core";
import { RuneFocusValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-rune-focus",
  styleUrls: ["../../skills.scss", "rune-focus.scss"],
  shadow: true
})
export class RuneFocusComponent {

  @Prop({ reflectToAttr: true }) level: number = RuneFocusValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RuneFocusValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RuneFocusValues.levelRequirement[this.level] }+`,
      `Impact [Level 3+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="rune-focus"></ms-icon>,
      <ms-skill-overlay heading="Rune Focus"
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="rune-focus"></ms-icon>
        <div slot="description">
          The teachings of the Jibricia Sect unlock the power of your rune magic.
          While Flame Sigil is active, your
          max health increases by <span>{ RuneFocusValues.defence[this.level] }%</span> and
          fire damage increases by <span>{ RuneFocusValues.damage[this.level] }%</span>.
          While Frost Sigil is active, your
          defense increases by <span>{ RuneFocusValues.defence[this.level] }%</span> and
          ice damage increases by <span>{ RuneFocusValues.damage[this.level] }%</span>.
          While Storm Sigil is active, your
          evasion increases by <span>{ RuneFocusValues.evasion[this.level] }%</span>,
          movement speed increases by <span>{ RuneFocusValues.movement[this.level] }%</span>,
          and your electric damage increases by <span>{ RuneFocusValues.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
