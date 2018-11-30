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
    ["adrenaline-rush", "adrenalineRush", BerserkerValues.AdrenalineRush, true],
    ["blood-price", "bloodPrice", BerserkerValues.BloodPrice, true],
    ["bloodlust", "bloodlust", BerserkerValues.Bloodlust, true],
    ["dark-aura", "darkAura", BerserkerValues.DarkAura, true],
    ["dark-breaker", "darkBreaker", BerserkerValues.DarkBreaker, true],
    ["dark-might", "darkMight", BerserkerValues.DarkMight, true],
    ["death-spin", "deathSpin", BerserkerValues.DeathSpin, true],
    ["deep-wounds", "deepWounds", BerserkerValues.DeepWounds, true],
    ["earthquake", "earthquake", BerserkerValues.Earthquake, true],
    ["greatsword-mastery", "greatswordMastery", BerserkerValues.GreatswordMastery, true],
    ["ground-breaker", "groundBreaker", BerserkerValues.GroundBreaker, true],
    ["inhuman-endurance", "inhumanEndurance", BerserkerValues.InhumanEndurance, true],
    ["intimidation", "intimidation", BerserkerValues.Intimidation, true],
    ["raging-slash", "ragingSlash", BerserkerValues.RagingSlash, true],
    ["void-slash", "voidSlash", BerserkerValues.VoidSlash, true],
    ["warriors-instinct", "warriorsInstinct", BerserkerValues.WarriorsInstinct, true],
    ["x-slash", "xSlash", BerserkerValues.XSlash, true],
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
