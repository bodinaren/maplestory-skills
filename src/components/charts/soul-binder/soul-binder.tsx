import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as SoulBinderSkills from "../../../global/values/soul-binder";

@Component({
  tag: "ms-soul-binder",
  styleUrls: ["soul-binder.css"],
  shadow: true
})
export class SoulBinderComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

  @Prop({ mutable: true }) animusFocus: number = SoulBinderSkills.AnimusFocus.minLevel;
  @Prop({ mutable: true }) chainExplosion: number = SoulBinderSkills.ChainExplosion.minLevel;
  @Prop({ mutable: true }) chainSpear: number = SoulBinderSkills.ChainSpear.minLevel;
  @Prop({ mutable: true }) cycloneBomber: number = SoulBinderSkills.CycloneBomber.minLevel;
  @Prop({ mutable: true }) electricEnergyDischarge: number = SoulBinderSkills.ElectricEnergyDischarge.minLevel;
  @Prop({ mutable: true }) energyStream: number = SoulBinderSkills.EnergyStream.minLevel;
  @Prop({ mutable: true }) expansionBall: number = SoulBinderSkills.ExpansionBall.minLevel;
  @Prop({ mutable: true }) flashStrike: number = SoulBinderSkills.FlashStrike.minLevel;
  @Prop({ mutable: true }) illusion: number = SoulBinderSkills.Illusion.minLevel;
  @Prop({ mutable: true }) lifeString: number = SoulBinderSkills.LifeString.minLevel;
  @Prop({ mutable: true }) mantraRelease: number = SoulBinderSkills.MantraRelease.minLevel;
  @Prop({ mutable: true }) narubashanLiberation: number = SoulBinderSkills.NarubashanLiberation.minLevel;
  @Prop({ mutable: true }) orbMastery: number = SoulBinderSkills.OrbMastery.minLevel;
  @Prop({ mutable: true }) rayStorm: number = SoulBinderSkills.RayStorm.minLevel;
  @Prop({ mutable: true }) shootingStar: number = SoulBinderSkills.ShootingStar.minLevel;
  @Prop({ mutable: true }) splitBarrier: number = SoulBinderSkills.SplitBarrier.minLevel;
  @Prop({ mutable: true }) zoneOfRenewal: number = SoulBinderSkills.ZoneOfRenewal.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, SoulBinderSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, SoulBinderSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, SoulBinderSkills));
  }

  render() {
    return (
      <ms-chart msClass="soul-binder">
        { renderLevelControls(this, SoulBinderSkills, this.editable) }
      </ms-chart>
    );
  }
}
