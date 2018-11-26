import { Component, Prop } from "@stencil/core";
import * as HeavyGunnerValues from "../../../global/values/heavy-gunner";

@Component({
  tag: "ms-heavy-gunner",
  styleUrls: ["heavy-gunner.scss"],
  shadow: true
})
export class HeavyGunnerComponent {

  @Prop({ mutable: true }) advancedBullets: number = HeavyGunnerValues.AdvancedBulletsValues.minLevel;
  @Prop({ mutable: true }) advancedMissiles: number = HeavyGunnerValues.AdvancedMissilesValues.minLevel;
  @Prop({ mutable: true }) advancedPulseWeapons: number = HeavyGunnerValues.AdvancedPulseWeaponsValues.minLevel;
  @Prop({ mutable: true }) blastChargeKit: number = HeavyGunnerValues.BlastChargeKitValues.minLevel;
  @Prop({ mutable: true }) bulletSpray: number = HeavyGunnerValues.BulletSprayValues.minLevel;
  @Prop({ mutable: true }) electricBlast: number = HeavyGunnerValues.ElectricBlastValues.minLevel;
  @Prop({ mutable: true }) gatlingFire: number = HeavyGunnerValues.GatlingFireValues.minLevel;
  @Prop({ mutable: true }) homingMissiles: number = HeavyGunnerValues.HomingMissilesValues.minLevel;
  @Prop({ mutable: true }) jetBoots: number = HeavyGunnerValues.JetBootsValues.minLevel;
  @Prop({ mutable: true }) lockOn: number = HeavyGunnerValues.LockOnValues.minLevel;
  @Prop({ mutable: true }) magneticBomb: number = HeavyGunnerValues.MagneticBombValues.minLevel;
  @Prop({ mutable: true }) mBomb: number = HeavyGunnerValues.MBombValues.minLevel;
  @Prop({ mutable: true }) medKit: number = HeavyGunnerValues.MedKitValues.minLevel;
  @Prop({ mutable: true }) reload: number = HeavyGunnerValues.ReloadValues.minLevel;
  @Prop({ mutable: true }) rocketLauncher: number = HeavyGunnerValues.RocketLauncherValues.minLevel;
  @Prop({ mutable: true }) stunGrenades: number = HeavyGunnerValues.StunGrenadesValues.minLevel;
  @Prop({ mutable: true }) suborbitalBombardment: number = HeavyGunnerValues.SuborbitalBombardmentValues.minLevel;

  render() {
    return (
      <ms-chart msClass="heavy-gunner">
        <ms-advanced-bullets level={ this.advancedBullets }></ms-advanced-bullets>
        <ms-advanced-missiles level={ this.advancedMissiles }></ms-advanced-missiles>
        <ms-advanced-pulse-weapons level={ this.advancedPulseWeapons }></ms-advanced-pulse-weapons>
        <ms-blast-charge-kit level={ this.blastChargeKit }></ms-blast-charge-kit>
        <ms-bullet-spray level={ this.bulletSpray }></ms-bullet-spray>
        <ms-electric-blast level={ this.electricBlast }></ms-electric-blast>
        <ms-gatling-fire level={ this.gatlingFire }></ms-gatling-fire>
        <ms-homing-missiles level={ this.homingMissiles }></ms-homing-missiles>
        <ms-jet-boots level={ this.jetBoots }></ms-jet-boots>
        <ms-lock-on level={ this.lockOn }></ms-lock-on>
        <ms-magnetic-bomb level={ this.magneticBomb }></ms-magnetic-bomb>
        <ms-m-bomb level={ this.mBomb }></ms-m-bomb>
        <ms-med-kit level={ this.medKit }></ms-med-kit>
        <ms-reload level={ this.reload }></ms-reload>
        <ms-rocket-launcher level={ this.rocketLauncher }></ms-rocket-launcher>
        <ms-stun-grenades level={ this.stunGrenades }></ms-stun-grenades>
        <ms-suborbital-bombardment level={ this.suborbitalBombardment }></ms-suborbital-bombardment>
      </ms-chart>
    );
  }
}
