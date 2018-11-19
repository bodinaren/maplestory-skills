import { Component, Prop } from "@stencil/core";
import { DeathSentenceValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-death-sentence",
  styleUrls: ["../../skills.scss", "death-sentence.scss"],
  shadow: true
})
export class DeathSentenceComponent {

  @Prop({ reflectToAttr: true }) level: number = DeathSentenceValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeathSentenceValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ DeathSentenceValues.levelRequirement[this.level] }+`,
      `Mark of Death [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="death-sentence"></ms-icon>,
      <ms-skill-overlay heading="Death Sentence"
                        element="Dark"
                        level={ this.level }
                        type="Long Range / Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 45 }
                        max={ this.max }>
        <ms-icon slot="icon" name="death-sentence"></ms-icon>
        <div slot="description">
          Summon <span>3</span> mirror images and send them toward <span>3</span> enemies
          up to <span>8</span> m in front of you,
          dealing <span>{ DeathSentenceValues.damage[this.level] }%</span> dark damage each
          and shadow marking the enemies for death, regardless of health.
          These shadows marks last for <span>6</span> sec and increase damage taken by <span>1%</span>.
          Your mirror images' shadow marks stack with your marks of death.
          The mirror images will not attack the same target.
        </div>
      </ms-skill-overlay>
    ];
  }
}
