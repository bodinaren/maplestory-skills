import { Component, Prop } from "@stencil/core";
import { RuneFocus } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-rune-focus",
  styleUrls: ["../../skills.scss", "rune-focus.scss"],
  shadow: true
})
export class RuneFocusComponent {

  @Prop({ reflectToAttr: true }) level: number = RuneFocus.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RuneFocus.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RuneFocus.levelRequirement[this.level] }+`,
      `Impact [Level 3+]`,
    ];
  }

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="rune-focus"></ms-icon>,
      <ms-skill-overlay heading={ RuneFocus.name }
                        level={ this.level }
                        passive={ true }
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="rune-focus"></ms-icon>
        <div slot="description">
          The teachings of the Jibricia Sect unlock the power of your rune magic.
          While Flame Sigil is active, your
          max health increases by <span>{ RuneFocus.values.defence[this.level] }%</span> and
          fire damage increases by <span>{ RuneFocus.values.damage[this.level] }%</span>.
          While Frost Sigil is active, your
          defense increases by <span>{ RuneFocus.values.defence[this.level] }%</span> and
          ice damage increases by <span>{ RuneFocus.values.damage[this.level] }%</span>.
          While Storm Sigil is active, your
          evasion increases by <span>{ RuneFocus.values.evasion[this.level] }%</span>,
          movement speed increases by <span>{ RuneFocus.values.movement[this.level] }%</span>,
          and your electric damage increases by <span>{ RuneFocus.values.damage[this.level] }%</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
