import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as AssassinValues from "../../../../global/values/assassin";

@Component({
  tag: "ms-assassin-editor",
  styleUrl: "assassin-editor.scss",
  shadow: true
})
export class AssassinEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  assassinChart!: HTMLMsAssassinElement;

  private properties: ClassProperties[] = [
    ["dark-clock", "darkCloak", AssassinValues.DarkCloak, true],
    ["dash", "dash", AssassinValues.Dash, false],
    ["death-sentence", "deathSentence", AssassinValues.DeathSentence, true],
    ["fatal-strikes", "fatalStrikes", AssassinValues.FatalStrikes, true],
    ["fragmented-star", "fragmentedStar", AssassinValues.FragmentedStar, true],
    ["lucky-stars", "luckyStars", AssassinValues.LuckyStars, true],
    ["mark-of-death", "markOfDeath", AssassinValues.MarkOfDeath, true],
    ["mirror-image-dark-blade", "mirrorImageDarkBlade", AssassinValues.MirrorImageDarkBlade, true],
    ["shadow-arts", "shadowArts", AssassinValues.ShadowArts, true],
    ["shadow-burst", "shadowBurst", AssassinValues.ShadowBurst, true],
    ["shadow-chaser", "shadowChaser", AssassinValues.ShadowChaser, false],
    ["shadow-cutter", "shadowCutter", AssassinValues.ShadowCutter, true],
    ["shadow-web", "shadowWeb", AssassinValues.ShadowWeb, true],
    ["soul-grind", "soulGrind", AssassinValues.SoulGrind, true],
    ["star-chaser", "starChaser", AssassinValues.StarChaser, true],
    ["star-flurry", "starFlurry", AssassinValues.StarFlurry, true],
    ["thrown-weapon-mastery", "thrownWeaponMastery", AssassinValues.ThrownWeaponMastery, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.assassinChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-assassin ${ renderProperties(this.assassinChart, this.properties) }></ms-assassin>`);
  }

  render() {

    return [
      <ms-assassin ref={(el) => this.assassinChart = el as HTMLMsAssassinElement }></ms-assassin>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
