import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as PriestSkills from "../../../global/values/priest";

@Component({
  tag: "ms-priest",
  styleUrls: ["priest.css"],
  shadow: true
})
export class PriestComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

  @Prop({ mutable: true }) heavenlyWings: number = PriestSkills.HeavenlyWings.minLevel;
  @Prop({ mutable: true }) steadfastFaith: number = PriestSkills.SteadfastFaith.minLevel;
  @Prop({ mutable: true }) celestialLight: number = PriestSkills.CelestialLight.minLevel;
  @Prop({ mutable: true }) holyBlast: number = PriestSkills.HolyBlast.minLevel;
  @Prop({ mutable: true }) healingPrayer: number = PriestSkills.HealingPrayer.minLevel;
  @Prop({ mutable: true }) scepterMastery: number = PriestSkills.ScepterMastery.minLevel;
  @Prop({ mutable: true }) celestialGuardian: number = PriestSkills.CelestialGuardian.minLevel;
  @Prop({ mutable: true }) shieldOfTheArchon: number = PriestSkills.ShieldOfTheArchon.minLevel;
  @Prop({ mutable: true }) scourgingWave: number = PriestSkills.ScourgingWave.minLevel;
  @Prop({ mutable: true }) celestialBlessings: number = PriestSkills.CelestialBlessings.minLevel;
  @Prop({ mutable: true }) holyRelic: number = PriestSkills.HolyRelic.minLevel;
  @Prop({ mutable: true }) sanctuary: number = PriestSkills.Sanctuary.minLevel;
  @Prop({ mutable: true }) holySymbol: number = PriestSkills.HolySymbol.minLevel;
  @Prop({ mutable: true }) healingMastery: number = PriestSkills.HealingMastery.minLevel;
  @Prop({ mutable: true }) smitingAura: number = PriestSkills.SmitingAura.minLevel;
  @Prop({ mutable: true }) disciple: number = PriestSkills.Disciple.minLevel;
  @Prop({ mutable: true }) angelicRay: number = PriestSkills.AngelicRay.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, PriestSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, PriestSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, PriestSkills));
  }

  render() {
    return (
      <ms-chart msClass="priest">
        { renderLevelControls(this, PriestSkills, this.editable) }
      </ms-chart>
    );
  }
}
