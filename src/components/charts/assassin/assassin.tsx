import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { AssassinSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/assassin";

@Component({
  tag: "ms-assassin",
  styleUrls: ["assassin.css"],
  shadow: true
})
export class AssassinComponent implements IChart {

  @Element() host: HTMLMsAssassinElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;

  @Prop({ mutable: true }) darkCloak: number = AssassinSkills.DarkCloak.minLevel;
  @Prop({ mutable: true }) dash: number = AssassinSkills.Dash.minLevel;
  @Prop({ mutable: true }) deathSentence: number = AssassinSkills.DeathSentence.minLevel;
  @Prop({ mutable: true }) fatalStrikes: number = AssassinSkills.FatalStrikes.minLevel;
  @Prop({ mutable: true }) fragmentedStar: number = AssassinSkills.FragmentedStar.minLevel;
  @Prop({ mutable: true }) luckyStars: number = AssassinSkills.LuckyStars.minLevel;
  @Prop({ mutable: true }) markOfDeath: number = AssassinSkills.MarkOfDeath.minLevel;
  @Prop({ mutable: true }) mirrorImageDarkBlade: number = AssassinSkills.MirrorImageDarkBlade.minLevel;
  @Prop({ mutable: true }) shadowArts: number = AssassinSkills.ShadowArts.minLevel;
  @Prop({ mutable: true }) shadowBurst: number = AssassinSkills.ShadowBurst.minLevel;
  @Prop({ mutable: true }) shadowChaser: number = AssassinSkills.ShadowChaser.minLevel;
  @Prop({ mutable: true }) shadowCutter: number = AssassinSkills.ShadowCutter.minLevel;
  @Prop({ mutable: true }) shadowWeb: number = AssassinSkills.ShadowWeb.minLevel;
  @Prop({ mutable: true }) soulGrind: number = AssassinSkills.SoulGrind.minLevel;
  @Prop({ mutable: true }) starChaser: number = AssassinSkills.StarChaser.minLevel;
  @Prop({ mutable: true }) starFlurry: number = AssassinSkills.StarFlurry.minLevel;
  @Prop({ mutable: true }) thrownWeaponMastery: number = AssassinSkills.ThrownWeaponMastery.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, AssassinSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, AssassinSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, AssassinSkills, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, AssassinSkills));
  }

  render() {
    return (
      <ms-chart msClass="assassin" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
      { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
      { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
    </ms-chart>
    );
  }
}
