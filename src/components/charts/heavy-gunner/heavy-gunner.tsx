import { Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as HeavyGunnerSkills from "../../../global/values/heavy-gunner";

@Component({
  tag: "ms-heavy-gunner",
  styleUrls: ["heavy-gunner.css"],
  shadow: true
})
export class HeavyGunnerComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

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

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, HeavyGunnerSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, HeavyGunnerSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, HeavyGunnerSkills);

    this.emitChangeEvent();
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, HeavyGunnerSkills));
  }

  render() {
    return (
      <ms-chart msClass="heavy-gunner">
        { renderLevelControls(this, HeavyGunnerSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
