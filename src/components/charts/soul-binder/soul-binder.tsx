import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { SoulBinderSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/soul-binder";

@Component({
  tag: "ms-soul-binder",
  styleUrls: ["soul-binder.css"],
  shadow: true
})
export class SoulBinderComponent implements IChart {

  @Element() host: HTMLMsSoulBinderElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;
  @Prop() ignoreMax: boolean = false;

  @Prop({ mutable: true }) animusFocus: number = SoulBinderSkills.AnimusFocus.minLevel;
  @Prop({ mutable: true }) concussionOrb: number = SoulBinderSkills.ConcussionOrb.minLevel;
  @Prop({ mutable: true }) soaringOrb: number = SoulBinderSkills.SoaringOrb.minLevel;
  @Prop({ mutable: true }) ragingTempest: number = SoulBinderSkills.RagingTempest.minLevel;
  @Prop({ mutable: true }) staticFlash: number = SoulBinderSkills.StaticFlash.minLevel;
  @Prop({ mutable: true }) energySurge: number = SoulBinderSkills.EnergySurge.minLevel;
  @Prop({ mutable: true }) expansionBlast: number = SoulBinderSkills.ExpansionBlast.minLevel;
  @Prop({ mutable: true }) flashStrike: number = SoulBinderSkills.FlashStrike.minLevel;
  @Prop({ mutable: true }) illusion: number = SoulBinderSkills.Illusion.minLevel;
  @Prop({ mutable: true }) healingBond: number = SoulBinderSkills.HealingBond.minLevel;
  @Prop({ mutable: true }) mantraArray: number = SoulBinderSkills.MantraArray.minLevel;
  @Prop({ mutable: true }) narubashanUnleashed: number = SoulBinderSkills.NarubashanUnleashed.minLevel;
  @Prop({ mutable: true }) orbMastery: number = SoulBinderSkills.OrbMastery.minLevel;
  @Prop({ mutable: true }) radiantSalvo: number = SoulBinderSkills.RadiantSalvo.minLevel;
  @Prop({ mutable: true }) shootingStar: number = SoulBinderSkills.ShootingStar.minLevel;
  @Prop({ mutable: true }) lightBarrier: number = SoulBinderSkills.LightBarrier.minLevel;
  @Prop({ mutable: true }) fountOfRenewal: number = SoulBinderSkills.FountOfRenewal.minLevel;

  @Prop({ mutable: true }) awakenedMantra: number = SoulBinderSkills.AwakenedMantra.minLevel;
  @Prop({ mutable: true }) spiritBound: number = SoulBinderSkills.SpiritBound.minLevel;
  @Prop({ mutable: true }) spiritCrush: number = SoulBinderSkills.SpiritCrush.minLevel;
  @Prop({ mutable: true }) visionTorrent: number = SoulBinderSkills.VisionTorrent.minLevel;
  @Prop({ mutable: true }) awakenedMind: number = SoulBinderSkills.AwakenedMind.minLevel;
  @Prop({ mutable: true }) soulFlock: number = SoulBinderSkills.SoulFlock.minLevel;
  @Prop({ mutable: true }) soulShield: number = SoulBinderSkills.SoulShield.minLevel;
  @Prop({ mutable: true }) soulHarmony: number = SoulBinderSkills.SoulHarmony.minLevel;
  @Prop({ mutable: true }) triuneLink: number = SoulBinderSkills.TriuneLink.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, SoulBinderSkills, this.ignoreMax);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, SoulBinderSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, SoulBinderSkills, this.ignoreMax, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("ignoreMax")
  ignoreMaxChanged(): void {
    processSkills(this, SoulBinderSkills, this.ignoreMax);
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, SoulBinderSkills));
  }

  render() {
    return (
      <ms-chart msClass="soul-binder" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
      { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
      { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
    </ms-chart>
    );
  }
}
