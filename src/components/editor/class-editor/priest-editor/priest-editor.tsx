import { Component, Method, Event, EventEmitter } from "@stencil/core";
import * as PriestValues from "../../../../global/values/priest";

@Component({
  tag: "ms-priest-editor",
  styleUrl: "priest-editor.scss",
  shadow: true
})
export class PriestEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  priestChart!: HTMLMsPriestElement;

  async levelChanged(skillName: string, level: number) {
    this.priestChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    let props = [
      this.priestChart.celestialLight > PriestValues.CelestialLightValues.minLevel && `celestial-light="${ this.priestChart.celestialLight }"`,
      this.priestChart.holyBlast > PriestValues.HolyBlastValues.minLevel && `holy-blast="${ this.priestChart.holyBlast }"`,
      this.priestChart.shieldOfTheArchon > PriestValues.ShieldOfTheArchonValues.minLevel && `shield-of-the-archon="${ this.priestChart.shieldOfTheArchon }"`,
      this.priestChart.holyRelic > PriestValues.HolyRelicValues.minLevel && `holy-relic="${ this.priestChart.holyRelic }"`,
      this.priestChart.healingPrayer > PriestValues.HealingPrayerValues.minLevel && `healing-prayer="${ this.priestChart.healingPrayer }"`,
      this.priestChart.scourgingWave > PriestValues.ScourgingWaveValues.minLevel && `scourging-wave="${ this.priestChart.scourgingWave }"`,
      this.priestChart.sanctuary > PriestValues.SanctuaryValues.minLevel && `sanctuary="${ this.priestChart.sanctuary }"`,
      this.priestChart.smitingAura > PriestValues.SmitingAuraValues.minLevel && `smiting-aura="${ this.priestChart.smitingAura }"`,
      this.priestChart.celestialGuardian > PriestValues.CelestialGuardianValues.minLevel && `celestial-guardian="${ this.priestChart.celestialGuardian }"`,
      this.priestChart.celestialBlessings > PriestValues.CelestialBlessingsValues.minLevel && `celestial-blessings="${ this.priestChart.celestialBlessings }"`,
      this.priestChart.holySymbol > PriestValues.HolySymbolValues.minLevel && `holy-symbol="${ this.priestChart.holySymbol }"`,
      this.priestChart.disciple > PriestValues.DiscipleValues.minLevel && `disciple="${ this.priestChart.disciple }"`,
      this.priestChart.scepterMastery > PriestValues.ScepterMasteryValues.minLevel && `scepter-mastery="${ this.priestChart.scepterMastery }"`,
      this.priestChart.healingMastery > PriestValues.HealingMasteryValues.minLevel && `healing-mastery="${ this.priestChart.healingMastery }"`,
      this.priestChart.angelicRay > PriestValues.AngelicRayValues.minLevel && `angelic-ray="${ this.priestChart.angelicRay }"`,
    ];

    return Promise.resolve(`<ms-priest ${ props.filter(x => x).join(" ") }></ms-priest>`);
  }

  render() {
    return ([
      <ms-level-control class="celestialLight"
                        onLevelchanged={ (evt) => this.levelChanged("celestialLight", evt.detail) }
                        min={ PriestValues.CelestialLightValues.minLevel }
                        max={ PriestValues.CelestialLightValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="holyBlast"
                        onLevelchanged={ (evt) => this.levelChanged("holyBlast", evt.detail) }
                        min={ PriestValues.HolyBlastValues.minLevel }
                        max={ PriestValues.HolyBlastValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="shieldOfTheArchon"
                        onLevelchanged={ (evt) => this.levelChanged("shieldOfTheArchon", evt.detail) }
                        min={ PriestValues.ShieldOfTheArchonValues.minLevel }
                        max={ PriestValues.ShieldOfTheArchonValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="holyRelic"
                        onLevelchanged={ (evt) => this.levelChanged("holyRelic", evt.detail) }
                        min={ PriestValues.HolyRelicValues.minLevel }
                        max={ PriestValues.HolyRelicValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="healingPrayer"
                        onLevelchanged={ (evt) => this.levelChanged("healingPrayer", evt.detail) }
                        min={ PriestValues.HealingPrayerValues.minLevel }
                        max={ PriestValues.HealingPrayerValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="scourgingWave"
                        onLevelchanged={ (evt) => this.levelChanged("scourgingWave", evt.detail) }
                        min={ PriestValues.ScourgingWaveValues.minLevel }
                        max={ PriestValues.ScourgingWaveValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="sanctuary"
                        onLevelchanged={ (evt) => this.levelChanged("sanctuary", evt.detail) }
                        min={ PriestValues.SanctuaryValues.minLevel }
                        max={ PriestValues.SanctuaryValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="smitingAura"
                        onLevelchanged={ (evt) => this.levelChanged("smitingAura", evt.detail) }
                        min={ PriestValues.SmitingAuraValues.minLevel }
                        max={ PriestValues.SmitingAuraValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="celestialGuardian"
                        onLevelchanged={ (evt) => this.levelChanged("celestialGuardian", evt.detail) }
                        min={ PriestValues.CelestialGuardianValues.minLevel }
                        max={ PriestValues.CelestialGuardianValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="celestialBlessings"
                        onLevelchanged={ (evt) => this.levelChanged("celestialBlessings", evt.detail) }
                        min={ PriestValues.CelestialBlessingsValues.minLevel }
                        max={ PriestValues.CelestialBlessingsValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="holySymbol"
                        onLevelchanged={ (evt) => this.levelChanged("holySymbol", evt.detail) }
                        min={ PriestValues.HolySymbolValues.minLevel }
                        max={ PriestValues.HolySymbolValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="disciple"
                        onLevelchanged={ (evt) => this.levelChanged("disciple", evt.detail) }
                        min={ PriestValues.DiscipleValues.minLevel }
                        max={ PriestValues.DiscipleValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="scepterMastery"
                        onLevelchanged={ (evt) => this.levelChanged("scepterMastery", evt.detail) }
                        min={ PriestValues.ScepterMasteryValues.minLevel }
                        max={ PriestValues.ScepterMasteryValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="healingMastery"
                        onLevelchanged={ (evt) => this.levelChanged("healingMastery", evt.detail) }
                        min={ PriestValues.HealingMasteryValues.minLevel }
                        max={ PriestValues.HealingMasteryValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="angelicRay"
                        onLevelchanged={ (evt) => this.levelChanged("angelicRay", evt.detail) }
                        min={ PriestValues.AngelicRayValues.minLevel }
                        max={ PriestValues.AngelicRayValues.maxLevel }>
      </ms-level-control>,
      <ms-priest ref={(el) => this.priestChart = el as HTMLMsPriestElement }></ms-priest>,
    ]);
  }
}
