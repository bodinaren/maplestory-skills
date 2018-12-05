import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as BerserkerSkills from "../../../global/values/berserker";

@Component({
  tag: "ms-berserker",
  styleUrls: ["berserker.css"],
  shadow: true
})
export class BerserkerComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

  @Prop({ mutable: true }) adrenalineRush: number = BerserkerSkills.AdrenalineRush.minLevel;
  @Prop({ mutable: true }) bloodPrice: number = BerserkerSkills.BloodPrice.minLevel;
  @Prop({ mutable: true }) bloodlust: number = BerserkerSkills.Bloodlust.minLevel;
  @Prop({ mutable: true }) darkAura: number = BerserkerSkills.DarkAura.minLevel;
  @Prop({ mutable: true }) darkBreaker: number = BerserkerSkills.DarkBreaker.minLevel;
  @Prop({ mutable: true }) darkMight: number = BerserkerSkills.DarkMight.minLevel;
  @Prop({ mutable: true }) deathSpin: number = BerserkerSkills.DeathSpin.minLevel;
  @Prop({ mutable: true }) deepWounds: number = BerserkerSkills.DeepWounds.minLevel;
  @Prop({ mutable: true }) earthquake: number = BerserkerSkills.Earthquake.minLevel;
  @Prop({ mutable: true }) greatswordMastery: number = BerserkerSkills.GreatswordMastery.minLevel;
  @Prop({ mutable: true }) groundBreaker: number = BerserkerSkills.GroundBreaker.minLevel;
  @Prop({ mutable: true }) inhumanEndurance: number = BerserkerSkills.InhumanEndurance.minLevel;
  @Prop({ mutable: true }) intimidation: number = BerserkerSkills.Intimidation.minLevel;
  @Prop({ mutable: true }) ragingSlash: number = BerserkerSkills.RagingSlash.minLevel;
  @Prop({ mutable: true }) voidSlash: number = BerserkerSkills.VoidSlash.minLevel;
  @Prop({ mutable: true }) warriorsInstinct: number = BerserkerSkills.WarriorsInstinct.minLevel;
  @Prop({ mutable: true }) xSlash: number = BerserkerSkills.XSlash.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, BerserkerSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, BerserkerSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, BerserkerSkills));
  }

  render() {
    return (
      <ms-chart msClass="berserker">
        { renderLevelControls(this, BerserkerSkills, this.editable) }
      </ms-chart>
    );
  }
}
