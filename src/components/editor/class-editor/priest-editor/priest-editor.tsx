import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls } from "../class-editor-helpers";
import * as PriestSkills from "../../../../global/values/priest";

@Component({
  tag: "ms-priest-editor",
  styleUrl: "priest-editor.scss",
  shadow: true
})
export class PriestEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  priestChart!: HTMLMsPriestElement;

  private properties: ClassProperties[] = [
    ["angelic-ray", "angelicRay", PriestSkills.AngelicRay, true],
    ["celestial-blessings", "celestialBlessings", PriestSkills.CelestialBlessings, true],
    ["celestial-guardian", "celestialGuardian", PriestSkills.CelestialGuardian, true],
    ["celestial-light", "celestialLight", PriestSkills.CelestialLight, true],
    ["disciple", "disciple", PriestSkills.Disciple, true],
    ["healing-mastery", "healingMastery", PriestSkills.HealingMastery, true],
    ["healing-prayer", "healingPrayer", PriestSkills.HealingPrayer, true],
    ["heavenly-wings", "heavenlyWings", PriestSkills.HeavenlyWings, false],
    ["holy-blast", "holyBlast", PriestSkills.HolyBlast, true],
    ["holy-relic", "holyRelic", PriestSkills.HolyRelic, true],
    ["holy-symbol", "holySymbol", PriestSkills.HolySymbol, true],
    ["sanctuary", "sanctuary", PriestSkills.Sanctuary, true],
    ["scepter-mastery", "scepterMastery", PriestSkills.ScepterMastery, true],
    ["scourging-wave", "scourgingWave", PriestSkills.ScourgingWave, true],
    ["shield-of-the-archon", "shieldOfTheArchon", PriestSkills.ShieldOfTheArchon, true],
    ["smiting-aura", "smitingAura", PriestSkills.SmitingAura, true],
    ["steadfast-faith", "steadfastFaith", PriestSkills.SteadfastFaith, false],
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
