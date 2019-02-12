import { Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as SoulBinderSkills from "../../../global/values/soul-binder";

@Component({
  tag: "ms-soul-binder",
  styleUrls: ["soul-binder.css"],
  shadow: true
})
export class SoulBinderComponent implements IChart {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

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

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, SoulBinderSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, SoulBinderSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, SoulBinderSkills);

    this.emitChangeEvent();
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, SoulBinderSkills));
  }

  render() {
    return (
      <ms-chart msClass="soul-binder">
        { renderLevelControls(this, SoulBinderSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
