import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { StrikerSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/striker";

@Component({
  tag: "ms-striker",
  styleUrls: ["striker.css"],
  shadow: true
})
export class StrikerComponent implements IChart {

  @Element() host: HTMLMsStrikerElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;

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

  @Prop({ mutable: true }) rainingBlows: number = StrikerSkills.RainingBlows.minLevel;
  @Prop({ mutable: true }) shockwavePunch: number = StrikerSkills.ShockwavePunch.minLevel;
  @Prop({ mutable: true }) vulcanPunch: number = StrikerSkills.VulcanPunch.minLevel;
  @Prop({ mutable: true }) doubleFistSmash: number = StrikerSkills.DoubleFistSmash.minLevel;
  @Prop({ mutable: true }) meridianFlow: number = StrikerSkills.MeridianFlow.minLevel;
  @Prop({ mutable: true }) setupKick: number = StrikerSkills.SetupKick.minLevel;
  @Prop({ mutable: true }) spiralCannon: number = StrikerSkills.SpiralCannon.minLevel;
  @Prop({ mutable: true }) spinKick: number = StrikerSkills.SpinKick.minLevel;
  @Prop({ mutable: true }) tauntingFeint: number = StrikerSkills.TauntingFeint.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, StrikerSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, StrikerSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, StrikerSkills, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, StrikerSkills));
  }

  render() {
    return (
      <ms-chart msClass="striker" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
        { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
        { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
      </ms-chart>
    );
  }
}
