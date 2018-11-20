import { Component, Prop } from "@stencil/core";
import { IntimidationValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-intimidation",
  styleUrls: ["../../skills.scss", "intimidation.scss"],
  shadow: true
})
export class IntimidationComponent {

  @Prop({ reflectToAttr: true }) level: number = IntimidationValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IntimidationValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IntimidationValues.levelRequirement[this.level] }+`,
      `Greatsword Master [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="intimidation"></ms-icon>,
      <ms-skill-overlay heading="Intimidation"
                        level={ this.level }
                        type="Close Range / Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="intimidation"></ms-icon>
        <div slot="description">
          Overwhelm enemies with a show of force,
          dealing <span>{ IntimidationValues.damage[this.level] }%</span> damage
          to <span>5</span> enemies within <span>3</span> m.
          Enemies lost the will to fight, reducing their
          physical attack and magic attack by <span>{ IntimidationValues.attack[this.level] }%</span> and
          their movement speed and jump power by <span>{ IntimidationValues.movement[this.level] }%</span> for <span>4</span> sec.
          When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill.
          Some powerful enemies are immune.
        </div>
      </ms-skill-overlay>
    ];
  }
}
