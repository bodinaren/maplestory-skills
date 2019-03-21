import { Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as KnightSkills from "../../../global/values/knight";

@Component({
  tag: "ms-knight",
  styleUrls: ["knight.css"],
  shadow: true
})
export class KnightComponent implements IChart {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

  @Prop({ mutable: true }) bulwark: number = KnightSkills.Bulwark.minLevel;
  @Prop({ mutable: true }) crossCut: number = KnightSkills.CrossCut.minLevel;
  @Prop({ mutable: true }) defenderOfTheFaith: number = KnightSkills.DefenderOfTheFaith.minLevel;
  @Prop({ mutable: true }) divineStrike: number = KnightSkills.DivineStrike.minLevel;
  @Prop({ mutable: true }) drillThrust: number = KnightSkills.DrillThrust.minLevel;
  @Prop({ mutable: true }) ironDefense: number = KnightSkills.IronDefense.minLevel;
  @Prop({ mutable: true }) ironShield: number = KnightSkills.IronShield.minLevel;
  @Prop({ mutable: true }) longswordMastery: number = KnightSkills.LongswordMastery.minLevel;
  @Prop({ mutable: true }) shieldBooster: number = KnightSkills.ShieldBooster.minLevel;
  @Prop({ mutable: true }) shieldCharge: number = KnightSkills.ShieldCharge.minLevel;
  @Prop({ mutable: true }) shieldMastery: number = KnightSkills.ShieldMastery.minLevel;
  @Prop({ mutable: true }) shieldToss: number = KnightSkills.ShieldToss.minLevel;
  @Prop({ mutable: true }) shieldWall: number = KnightSkills.ShieldWall.minLevel;
  @Prop({ mutable: true }) stingingFlurry: number = KnightSkills.StingingFlurry.minLevel;
  @Prop({ mutable: true }) tornadoSlash: number = KnightSkills.TornadoSlash.minLevel;
  @Prop({ mutable: true }) typhoonSlash: number = KnightSkills.TyphoonSlash.minLevel;
  @Prop({ mutable: true }) warhorn: number = KnightSkills.Warhorn.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, KnightSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, KnightSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, KnightSkills, skill);

    this.emitChangeEvent();
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, KnightSkills));
  }

  render() {
    return (
      <ms-chart msClass="knight">
        { renderLevelControls(this, KnightSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
