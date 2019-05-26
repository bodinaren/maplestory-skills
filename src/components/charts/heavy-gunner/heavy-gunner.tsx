import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { HeavyGunnerSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/heavy-gunner";

@Component({
  tag: "ms-heavy-gunner",
  styleUrls: ["heavy-gunner.css"],
  shadow: true
})
export class HeavyGunnerComponent implements IChart {

  @Element() host: HTMLMsHeavyGunnerElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;
  @Prop() ignoreMax: boolean = false;

  @Prop({ mutable: true }) advancedBullets: number = HeavyGunnerSkills.AdvancedBullets.minLevel;
  @Prop({ mutable: true }) advancedMissiles: number = HeavyGunnerSkills.AdvancedMissiles.minLevel;
  @Prop({ mutable: true }) advancedPulseWeapons: number = HeavyGunnerSkills.AdvancedPulseWeapons.minLevel;
  @Prop({ mutable: true }) blastChargeKit: number = HeavyGunnerSkills.BlastChargeKit.minLevel;
  @Prop({ mutable: true }) bulletSpray: number = HeavyGunnerSkills.BulletSpray.minLevel;
  @Prop({ mutable: true }) electricBlast: number = HeavyGunnerSkills.ElectricBlast.minLevel;
  @Prop({ mutable: true }) gatlingFire: number = HeavyGunnerSkills.GatlingFire.minLevel;
  @Prop({ mutable: true }) homingMissiles: number = HeavyGunnerSkills.HomingMissiles.minLevel;
  @Prop({ mutable: true }) jetBoots: number = HeavyGunnerSkills.JetBoots.minLevel;
  @Prop({ mutable: true }) lockOn: number = HeavyGunnerSkills.LockOn.minLevel;
  @Prop({ mutable: true }) magneticBomb: number = HeavyGunnerSkills.MagneticBomb.minLevel;
  @Prop({ mutable: true }) mBomb: number = HeavyGunnerSkills.MBomb.minLevel;
  @Prop({ mutable: true }) medKit: number = HeavyGunnerSkills.MedKit.minLevel;
  @Prop({ mutable: true }) reload: number = HeavyGunnerSkills.Reload.minLevel;
  @Prop({ mutable: true }) rocketLauncher: number = HeavyGunnerSkills.RocketLauncher.minLevel;
  @Prop({ mutable: true }) stunGrenades: number = HeavyGunnerSkills.StunGrenades.minLevel;
  @Prop({ mutable: true }) suborbitalBombardment: number = HeavyGunnerSkills.SuborbitalBombardment.minLevel;

  @Prop({ mutable: true }) mobileArmory: number = HeavyGunnerSkills.MobileArmory.minLevel;
  @Prop({ mutable: true }) focusedFire: number = HeavyGunnerSkills.FocusedFire.minLevel;
  @Prop({ mutable: true }) fireBomber: number = HeavyGunnerSkills.FireBomber.minLevel;
  @Prop({ mutable: true }) missileSupercharger: number = HeavyGunnerSkills.MissileSupercharger.minLevel;
  @Prop({ mutable: true }) demolitionCannon: number = HeavyGunnerSkills.DemolitionCannon.minLevel;
  @Prop({ mutable: true }) plasmaChain: number = HeavyGunnerSkills.PlasmaChain.minLevel;
  @Prop({ mutable: true }) skyHunter: number = HeavyGunnerSkills.SkyHunter.minLevel;
  @Prop({ mutable: true }) plasmaSupercharger: number = HeavyGunnerSkills.PlasmaSupercharger.minLevel;
  @Prop({ mutable: true }) hyperGigaCannon: number = HeavyGunnerSkills.HyperGigaCannon.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, HeavyGunnerSkills, this.ignoreMax);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, HeavyGunnerSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, HeavyGunnerSkills, this.ignoreMax, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("ignoreMax")
  ignoreMaxChanged(): void {
    processSkills(this, HeavyGunnerSkills, this.ignoreMax);
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, HeavyGunnerSkills));
  }

  render() {
    return (
      <ms-chart msClass="heavy-gunner" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
      { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
      { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
    </ms-chart>
    );
  }
}
