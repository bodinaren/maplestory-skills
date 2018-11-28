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
    ["dark-clock", "darkCloak", AssassinValues.DarkCloakValues, true],
    ["dash", "dash", AssassinValues.DashValues, false],
    ["death-sentence", "deathSentence", AssassinValues.DeathSentenceValues, true],
    ["fatal-strikes", "fatalStrikes", AssassinValues.FatalStrikesValues, true],
    ["fragmented-star", "fragmentedStar", AssassinValues.FragmentedStarValues, true],
    ["lucky-stars", "luckyStars", AssassinValues.LuckyStarsValues, true],
    ["mark-of-death", "markOfDeath", AssassinValues.MarkOfDeathValues, true],
    ["mirror-image-dark-blade", "mirrorImageDarkBlade", AssassinValues.MirrorImageDarkBladeValues, true],
    ["shadow-arts", "shadowArts", AssassinValues.ShadowArtsValues, true],
    ["shadow-burst", "shadowBurst", AssassinValues.ShadowBurstValues, true],
    ["shadow-chaser", "shadowChaser", AssassinValues.ShadowChaserValues, false],
    ["shadow-cutter", "shadowCutter", AssassinValues.ShadowCutterValues, true],
    ["shadow-web", "shadowWeb", AssassinValues.ShadowWebValues, true],
    ["soul-grind", "soulGrind", AssassinValues.SoulGrindValues, true],
    ["star-chaser", "starChaser", AssassinValues.StarChaserValues, true],
    ["star-flurry", "starFlurry", AssassinValues.StarFlurryValues, true],
    ["thrown-weapon-mastery", "thrownWeaponMastery", AssassinValues.ThrownWeaponMasteryValues, true],
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
