import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as HeavyGunnerSkills from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-heavy-gunner-editor",
  styleUrl: "heavy-gunner-editor.scss",
  shadow: true
})
export class HeavyGunnerEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  heavyGunnerChart!: HTMLMsHeavyGunnerElement;

  private properties: ClassProperties[] = [
    ["advanced-bullets", "advancedBullets", HeavyGunnerSkills.AdvancedBullets, true],
    ["advanced-missiles", "advancedMissiles", HeavyGunnerSkills.AdvancedMissiles, true],
    ["advanced-pulse-weapons", "advancedPulseWeapons", HeavyGunnerSkills.AdvancedPulseWeapons, true],
    ["blast-charge-kit", "blastChargeKit", HeavyGunnerSkills.BlastChargeKit, true],
    ["bullet-spray", "bulletSpray", HeavyGunnerSkills.BulletSpray, true],
    ["electric-blast", "electricBlast", HeavyGunnerSkills.ElectricBlast, true],
    ["gatling-fire", "gatlingFire", HeavyGunnerSkills.GatlingFire, true],
    ["homing-missiles", "homingMissiles", HeavyGunnerSkills.HomingMissiles, true],
    ["jet-boots", "jetBoots", HeavyGunnerSkills.JetBoots, false],
    ["lock-on", "lockOn", HeavyGunnerSkills.LockOn, true],
    ["magnetic-bomb", "magneticBomb", HeavyGunnerSkills.MagneticBomb, true],
    ["m-bomb", "mBomb", HeavyGunnerSkills.MBomb, true],
    ["med-kit", "medKit", HeavyGunnerSkills.MedKit, true],
    ["reload", "reload", HeavyGunnerSkills.Reload, false],
    ["rocket-launcher", "rocketLauncher", HeavyGunnerSkills.RocketLauncher, true],
    ["stun-grenades", "stunGrenades", HeavyGunnerSkills.StunGrenades, true],
    ["suborbital-bombardment", "suborbitalBombardment", HeavyGunnerSkills.SuborbitalBombardment, true],
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
