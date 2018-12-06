import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as StrikerSkills from "../../../global/values/striker";

@Component({
  tag: "ms-striker",
  styleUrls: ["striker.css"],
  shadow: true
})
export class StrikerComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

  @Prop({ mutable: true }) beatdown: number = StrikerSkills.Beatdown.minLevel;
  @Prop({ mutable: true }) dragonKick: number = StrikerSkills.DragonKick.minLevel;
  @Prop({ mutable: true }) fightingSpirit: number = StrikerSkills.FightingSpirit.minLevel;
  @Prop({ mutable: true }) fistsOfFury: number = StrikerSkills.FistsOfFury.minLevel;
  @Prop({ mutable: true }) giganticBurst: number = StrikerSkills.GiganticBurst.minLevel;
  @Prop({ mutable: true }) guardDash: number = StrikerSkills.GuardDash.minLevel;
  @Prop({ mutable: true }) guillotine: number = StrikerSkills.Guillotine.minLevel;
  @Prop({ mutable: true }) hurricaneCutter: number = StrikerSkills.HurricaneCutter.minLevel;
  @Prop({ mutable: true }) kickTechnician: number = StrikerSkills.KickTechnician.minLevel;
  @Prop({ mutable: true }) knuckleMissile: number = StrikerSkills.KnuckleMissile.minLevel;
  @Prop({ mutable: true }) magnumBlow: number = StrikerSkills.MagnumBlow.minLevel;
  @Prop({ mutable: true }) maharPunch: number = StrikerSkills.MaharPunch.minLevel;
  @Prop({ mutable: true }) overcome: number = StrikerSkills.Overcome.minLevel;
  @Prop({ mutable: true }) paceControl: number = StrikerSkills.PaceControl.minLevel;
  @Prop({ mutable: true }) patternBreak: number = StrikerSkills.PatternBreak.minLevel;
  @Prop({ mutable: true }) powerPuncher: number = StrikerSkills.PowerPuncher.minLevel;
  @Prop({ mutable: true }) risingKick: number = StrikerSkills.RisingKick.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, StrikerSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, StrikerSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, StrikerSkills));
  }

  render() {
    return (
      <ms-chart msClass="striker">
        { renderLevelControls(this, StrikerSkills, this.editable) }
      </ms-chart>
    );
  }
}
