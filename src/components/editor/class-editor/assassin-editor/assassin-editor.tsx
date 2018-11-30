import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as AssassinSkills from "../../../../global/values/assassin";

@Component({
  tag: "ms-assassin-editor",
  styleUrl: "assassin-editor.scss",
  shadow: true
})
export class AssassinEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  assassinChart!: HTMLMsAssassinElement;

  private properties: ClassProperties[] = [
    ["dark-clock", "darkCloak", AssassinSkills.DarkCloak, true],
    ["dash", "dash", AssassinSkills.Dash, false],
    ["death-sentence", "deathSentence", AssassinSkills.DeathSentence, true],
    ["fatal-strikes", "fatalStrikes", AssassinSkills.FatalStrikes, true],
    ["fragmented-star", "fragmentedStar", AssassinSkills.FragmentedStar, true],
    ["lucky-stars", "luckyStars", AssassinSkills.LuckyStars, true],
    ["mark-of-death", "markOfDeath", AssassinSkills.MarkOfDeath, true],
    ["mirror-image-dark-blade", "mirrorImageDarkBlade", AssassinSkills.MirrorImageDarkBlade, true],
    ["shadow-arts", "shadowArts", AssassinSkills.ShadowArts, true],
    ["shadow-burst", "shadowBurst", AssassinSkills.ShadowBurst, true],
    ["shadow-chaser", "shadowChaser", AssassinSkills.ShadowChaser, false],
    ["shadow-cutter", "shadowCutter", AssassinSkills.ShadowCutter, true],
    ["shadow-web", "shadowWeb", AssassinSkills.ShadowWeb, true],
    ["soul-grind", "soulGrind", AssassinSkills.SoulGrind, true],
    ["star-chaser", "starChaser", AssassinSkills.StarChaser, true],
    ["star-flurry", "starFlurry", AssassinSkills.StarFlurry, true],
    ["thrown-weapon-mastery", "thrownWeaponMastery", AssassinSkills.ThrownWeaponMastery, true],
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
