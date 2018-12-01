import { Component, Prop, State, Event, EventEmitter, Method } from "@stencil/core";
import { processSkills, renderLevelControls, renderProperties, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as HeavyGunnerSkills from "../../../global/values/heavy-gunner";

@Component({
  tag: "ms-heavy-gunner",
  styleUrls: ["heavy-gunner.scss"],
  shadow: true
})
export class HeavyGunnerComponent {

  @Prop() editable: boolean = false;

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

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, HeavyGunnerSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, HeavyGunnerSkills));
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-heavy-gunner ${ renderProperties(this, HeavyGunnerSkills) }></ms-heavy-gunner>`);
  }

  render() {
    return (
      <ms-chart msClass="heavy-gunner">
        { renderLevelControls(this, HeavyGunnerSkills.AdvancedBullets, this.editable,
          <ms-advanced-bullets level={ this.advancedBullets }></ms-advanced-bullets>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.AdvancedMissiles, this.editable,
          <ms-advanced-missiles level={ this.advancedMissiles }></ms-advanced-missiles>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.AdvancedPulseWeapons, this.editable,
          <ms-advanced-pulse-weapons level={ this.advancedPulseWeapons }></ms-advanced-pulse-weapons>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.BlastChargeKit, this.editable,
          <ms-blast-charge-kit level={ this.blastChargeKit }></ms-blast-charge-kit>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.BulletSpray, this.editable,
          <ms-bullet-spray level={ this.bulletSpray }></ms-bullet-spray>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.ElectricBlast, this.editable,
          <ms-electric-blast level={ this.electricBlast }></ms-electric-blast>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.GatlingFire, this.editable,
          <ms-gatling-fire level={ this.gatlingFire }></ms-gatling-fire>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.HomingMissiles, this.editable,
          <ms-homing-missiles level={ this.homingMissiles }></ms-homing-missiles>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.JetBoots, this.editable,
          <ms-jet-boots level={ this.jetBoots }></ms-jet-boots>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.LockOn, this.editable,
          <ms-lock-on level={ this.lockOn }></ms-lock-on>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.MagneticBomb, this.editable,
          <ms-magnetic-bomb level={ this.magneticBomb }></ms-magnetic-bomb>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.MBomb, this.editable,
          <ms-m-bomb level={ this.mBomb }></ms-m-bomb>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.MedKit, this.editable,
          <ms-med-kit level={ this.medKit }></ms-med-kit>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.Reload, this.editable,
          <ms-reload level={ this.reload }></ms-reload>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.RocketLauncher, this.editable,
          <ms-rocket-launcher level={ this.rocketLauncher }></ms-rocket-launcher>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.StunGrenades, this.editable,
          <ms-stun-grenades level={ this.stunGrenades }></ms-stun-grenades>
        )}
        { renderLevelControls(this, HeavyGunnerSkills.SuborbitalBombardment, this.editable,
          <ms-suborbital-bombardment level={ this.suborbitalBombardment }></ms-suborbital-bombardment>
        )}
      </ms-chart>
    );
  }
}
