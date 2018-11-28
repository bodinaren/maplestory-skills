import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls } from "../class-editor-helpers";
import * as PriestValues from "../../../../global/values/priest";

@Component({
  tag: "ms-priest-editor",
  styleUrl: "priest-editor.scss",
  shadow: true
})
export class PriestEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  priestChart!: HTMLMsPriestElement;

  private properties: ClassProperties[] = [
    ["angelic-ray", "angelicRay", PriestValues.AngelicRayValues, true],
    ["celestial-blessings", "celestialBlessings", PriestValues.CelestialBlessingsValues, true],
    ["celestial-guardian", "celestialGuardian", PriestValues.CelestialGuardianValues, true],
    ["celestial-light", "celestialLight", PriestValues.CelestialLightValues, true],
    ["disciple", "disciple", PriestValues.DiscipleValues, true],
    ["healing-mastery", "healingMastery", PriestValues.HealingMasteryValues, true],
    ["healing-prayer", "healingPrayer", PriestValues.HealingPrayerValues, true],
    ["heavenly-wings", "heavenlyWings", PriestValues.HeavenlyWingsValues, false],
    ["holy-blast", "holyBlast", PriestValues.HolyBlastValues, true],
    ["holy-relic", "holyRelic", PriestValues.HolyRelicValues, true],
    ["holy-symbol", "holySymbol", PriestValues.HolySymbolValues, true],
    ["sanctuary", "sanctuary", PriestValues.SanctuaryValues, true],
    ["scepter-mastery", "scepterMastery", PriestValues.ScepterMasteryValues, true],
    ["scourging-wave", "scourgingWave", PriestValues.ScourgingWaveValues, true],
    ["shield-of-the-archon", "shieldOfTheArchon", PriestValues.ShieldOfTheArchonValues, true],
    ["smiting-aura", "smitingAura", PriestValues.SmitingAuraValues, true],
    ["steadfast-faith", "steadfastFaith", PriestValues.SteadfastFaithValues, false],
  ];

  async levelChanged(skillName: string, level: number) {
    this.priestChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-priest ${ renderProperties(this.priestChart, this.properties) }></ms-priest>`);
  }

  render() {
    return [
      <ms-priest ref={(el) => this.priestChart = el as HTMLMsPriestElement }></ms-priest>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
