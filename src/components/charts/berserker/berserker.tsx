import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { BerserkerSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/berserker";

@Component({
  tag: "ms-berserker",
  styleUrls: ["berserker.css"],
  shadow: true
})
export class BerserkerComponent implements IChart {

  @Element() host: HTMLMsBerserkerElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;
  @Prop() ignoreMax: boolean = false;

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

  @Prop({ mutable: true }) infiniteDarkness: number = BerserkerSkills.InfiniteDarkness.minLevel;
  @Prop({ mutable: true }) skullSplitter: number = BerserkerSkills.SkullSplitter.minLevel;
  @Prop({ mutable: true }) bloodFury: number = BerserkerSkills.BloodFury.minLevel;
  @Prop({ mutable: true }) parryTheMoon: number = BerserkerSkills.ParryTheMoon.minLevel;
  @Prop({ mutable: true }) aerialSmash: number = BerserkerSkills.AerialSmash.minLevel;
  @Prop({ mutable: true }) squall: number = BerserkerSkills.Squall.minLevel;
  @Prop({ mutable: true }) rendWound: number = BerserkerSkills.RendWound.minLevel;
  @Prop({ mutable: true }) ragingSoul: number = BerserkerSkills.RagingSoul.minLevel;
  @Prop({ mutable: true }) bloodSlash: number = BerserkerSkills.BloodSlash.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, BerserkerSkills, this.ignoreMax);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, BerserkerSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, BerserkerSkills, this.ignoreMax, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("ignoreMax")
  ignoreMaxChanged(): void {
    processSkills(this, BerserkerSkills, this.ignoreMax);
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, BerserkerSkills));
  }

  render() {
    return (
      <ms-chart msClass="berserker" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
        { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
        { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
      </ms-chart>
    );
  }
}
