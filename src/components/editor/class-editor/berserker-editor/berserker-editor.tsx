import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls } from "../class-editor-helpers";
import * as BerserkerSkills from "../../../../global/values/berserker";

@Component({
  tag: "ms-berserker-editor",
  styleUrl: "berserker-editor.scss",
  shadow: true
})
export class BerserkerEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  berserkerChart!: HTMLMsBerserkerElement;

  private properties: ClassProperties[] = [
    ["adrenaline-rush", "adrenalineRush", BerserkerSkills.AdrenalineRush, true],
    ["blood-price", "bloodPrice", BerserkerSkills.BloodPrice, true],
    ["bloodlust", "bloodlust", BerserkerSkills.Bloodlust, true],
    ["dark-aura", "darkAura", BerserkerSkills.DarkAura, true],
    ["dark-breaker", "darkBreaker", BerserkerSkills.DarkBreaker, true],
    ["dark-might", "darkMight", BerserkerSkills.DarkMight, true],
    ["death-spin", "deathSpin", BerserkerSkills.DeathSpin, true],
    ["deep-wounds", "deepWounds", BerserkerSkills.DeepWounds, true],
    ["earthquake", "earthquake", BerserkerSkills.Earthquake, true],
    ["greatsword-mastery", "greatswordMastery", BerserkerSkills.GreatswordMastery, true],
    ["ground-breaker", "groundBreaker", BerserkerSkills.GroundBreaker, true],
    ["inhuman-endurance", "inhumanEndurance", BerserkerSkills.InhumanEndurance, true],
    ["intimidation", "intimidation", BerserkerSkills.Intimidation, true],
    ["raging-slash", "ragingSlash", BerserkerSkills.RagingSlash, true],
    ["void-slash", "voidSlash", BerserkerSkills.VoidSlash, true],
    ["warriors-instinct", "warriorsInstinct", BerserkerSkills.WarriorsInstinct, true],
    ["x-slash", "xSlash", BerserkerSkills.XSlash, true],
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
