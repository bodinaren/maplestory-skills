import { Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as PriestSkills from "../../../global/values/priest";

@Component({
  tag: "ms-priest",
  styleUrls: ["priest.css"],
  shadow: true
})
export class PriestComponent implements IChart {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

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

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, PriestSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, PriestSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, PriestSkills, skill);

    this.emitChangeEvent();
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, PriestSkills));
  }

  render() {
    return (
      <ms-chart msClass="priest">
        { renderLevelControls(this, PriestSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
