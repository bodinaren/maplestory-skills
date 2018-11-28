import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls } from "../class-editor-helpers";
import * as BerserkerValues from "../../../../global/values/berserker";

@Component({
  tag: "ms-berserker-editor",
  styleUrl: "berserker-editor.scss",
  shadow: true
})
export class BerserkerEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  berserkerChart!: HTMLMsBerserkerElement;

  private properties: ClassProperties[] = [
    ["adrenaline-rush", "adrenalineRush", BerserkerValues.AdrenalineRushValues, true],
    ["blood-price", "bloodPrice", BerserkerValues.BloodPriceValues, true],
    ["bloodlust", "bloodlust", BerserkerValues.BloodlustValues, true],
    ["dark-aura", "darkAura", BerserkerValues.DarkAuraValues, true],
    ["dark-breaker", "darkBreaker", BerserkerValues.DarkBreakerValues, true],
    ["dark-might", "darkMight", BerserkerValues.DarkMightValues, true],
    ["death-spin", "deathSpin", BerserkerValues.DeathSpinValues, true],
    ["deep-wounds", "deepWounds", BerserkerValues.DeepWoundsValues, true],
    ["earthquake", "earthquake", BerserkerValues.EarthquakeValues, true],
    ["greatsword-mastery", "greatswordMastery", BerserkerValues.GreatswordMasteryValues, true],
    ["ground-breaker", "groundBreaker", BerserkerValues.GroundBreakerValues, true],
    ["inhuman-endurance", "inhumanEndurance", BerserkerValues.InhumanEnduranceValues, true],
    ["intimidation", "intimidation", BerserkerValues.IntimidationValues, true],
    ["raging-slash", "ragingSlash", BerserkerValues.RagingSlashValues, true],
    ["void-slash", "voidSlash", BerserkerValues.VoidSlashValues, true],
    ["warriors-instinct", "warriorsInstinct", BerserkerValues.WarriorsInstinctValues, true],
    ["x-slash", "xSlash", BerserkerValues.XSlashValues, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.berserkerChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-berserker ${ renderProperties(this.berserkerChart, this.properties) }></ms-berserker>`);
  }

  render() {
    return [
      <ms-berserker ref={(el) => this.berserkerChart = el as HTMLMsBerserkerElement }></ms-berserker>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
