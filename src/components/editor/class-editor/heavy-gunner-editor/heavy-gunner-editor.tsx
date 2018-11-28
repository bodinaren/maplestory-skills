import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as HeavyGunnerValues from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-heavy-gunner-editor",
  styleUrl: "heavy-gunner-editor.scss",
  shadow: true
})
export class HeavyGunnerEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  heavyGunnerChart!: HTMLMsHeavyGunnerElement;

  private properties: ClassProperties[] = [
    ["advanced-bullets", "advancedBullets", HeavyGunnerValues.AdvancedBulletsValues, true],
    ["advanced-missiles", "advancedMissiles", HeavyGunnerValues.AdvancedMissilesValues, true],
    ["advanced-pulse-weapons", "advancedPulseWeapons", HeavyGunnerValues.AdvancedPulseWeaponsValues, true],
    ["blast-charge-kit", "blastChargeKit", HeavyGunnerValues.BlastChargeKitValues, true],
    ["bullet-spray", "bulletSpray", HeavyGunnerValues.BulletSprayValues, true],
    ["electric-blast", "electricBlast", HeavyGunnerValues.ElectricBlastValues, true],
    ["gatling-fire", "gatlingFire", HeavyGunnerValues.GatlingFireValues, true],
    ["homing-missiles", "homingMissiles", HeavyGunnerValues.HomingMissilesValues, true],
    ["jet-boots", "jetBoots", HeavyGunnerValues.JetBootsValues, false],
    ["lock-on", "lockOn", HeavyGunnerValues.LockOnValues, true],
    ["magnetic-bomb", "magneticBomb", HeavyGunnerValues.MagneticBombValues, true],
    ["m-bomb", "mBomb", HeavyGunnerValues.MBombValues, true],
    ["med-kit", "medKit", HeavyGunnerValues.MedKitValues, true],
    ["reload", "reload", HeavyGunnerValues.ReloadValues, false],
    ["rocket-launcher", "rocketLauncher", HeavyGunnerValues.RocketLauncherValues, true],
    ["stun-grenades", "stunGrenades", HeavyGunnerValues.StunGrenadesValues, true],
    ["suborbital-bombardment", "suborbitalBombardment", HeavyGunnerValues.SuborbitalBombardmentValues, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.heavyGunnerChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-heavy-gunner ${ renderProperties(this.heavyGunnerChart, this.properties) }></ms-heavy-gunner>`);
  }

  render() {
    return [
      <ms-heavy-gunner ref={(el) => this.heavyGunnerChart = el as HTMLMsHeavyGunnerElement }></ms-heavy-gunner>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
