import { Component, Method, Event, EventEmitter } from "@stencil/core";
import * as AssassinValues from "../../../../global/values/assassin";

@Component({
  tag: "ms-assassin-editor",
  styleUrl: "assassin-editor.scss",
  shadow: true
})
export class AssassinEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  assassinChart!: HTMLMsAssassinElement;

  async levelChanged(skillName: string, level: number) {
    this.assassinChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    let props = [
      this.assassinChart.darkCloak > AssassinValues.DarkCloakValues.minLevel && `dark-cloak="${ this.assassinChart.darkCloak }"`,
      this.assassinChart.deathSentence > AssassinValues.DeathSentenceValues.minLevel && `death-sentence="${ this.assassinChart.deathSentence }"`,
      this.assassinChart.fatalStrikes > AssassinValues.FatalStrikesValues.minLevel && `fatal-strikes="${ this.assassinChart.fatalStrikes }"`,
      this.assassinChart.fragmentedStar > AssassinValues.FragmentedStarValues.minLevel && `fragmented-star="${ this.assassinChart.fragmentedStar }"`,
      this.assassinChart.luckyStars > AssassinValues.LuckyStarsValues.minLevel && `lucky-stars="${ this.assassinChart.luckyStars }"`,
      this.assassinChart.markOfDeath > AssassinValues.MarkOfDeathValues.minLevel && `mark-of-death="${ this.assassinChart.markOfDeath }"`,
      this.assassinChart.mirrorImageDarkBlade > AssassinValues.MirrorImageDarkBladeValues.minLevel && `mirror-image-dark-blade="${ this.assassinChart.mirrorImageDarkBlade }"`,
      this.assassinChart.shadowArts > AssassinValues.ShadowArtsValues.minLevel && `shadow-arts="${ this.assassinChart.shadowArts }"`,
      this.assassinChart.shadowBurst > AssassinValues.ShadowBurstValues.minLevel && `shadow-burst="${ this.assassinChart.shadowBurst }"`,
      this.assassinChart.shadowCutter > AssassinValues.ShadowCutterValues.minLevel && `shadow-cutter="${ this.assassinChart.shadowCutter }"`,
      this.assassinChart.shadowWeb > AssassinValues.ShadowWebValues.minLevel && `shadow-web="${ this.assassinChart.shadowWeb }"`,
      this.assassinChart.soulGrind > AssassinValues.SoulGrindValues.minLevel && `soul-grind="${ this.assassinChart.soulGrind }"`,
      this.assassinChart.starChaser > AssassinValues.StarChaserValues.minLevel && `star-chaser="${ this.assassinChart.starChaser }"`,
      this.assassinChart.starFlurry > AssassinValues.StarFlurryValues.minLevel && `star-flurry="${ this.assassinChart.starFlurry }"`,
      this.assassinChart.thrownWeaponMastery > AssassinValues.ThrownWeaponMasteryValues.minLevel && `thrown-weapon-mastery="${ this.assassinChart.thrownWeaponMastery }"`,
    ];

    return Promise.resolve(`<ms-archer ${ props.filter(x => x).join(" ") }></ms-archer>`);
  }

  renderMsLevelControl(skillName, skillValues) {
    return (
      <ms-level-control class={ skillName }
                        onLevelchanged={ (evt) => this.levelChanged(skillName, evt.detail) }
                        min={ skillValues.minLevel }
                        max={ skillValues.maxLevel }>
      </ms-level-control>
    );
  }

  render() {
    return [
      ["darkCloak", AssassinValues.DarkCloakValues],
      ["deathSentence", AssassinValues.DeathSentenceValues],
      ["fatalStrikes", AssassinValues.FatalStrikesValues],
      ["fragmentedStar", AssassinValues.FragmentedStarValues],
      ["luckyStars", AssassinValues.LuckyStarsValues],
      ["markOfDeath", AssassinValues.MarkOfDeathValues],
      ["mirrorImageDarkBlade", AssassinValues.MirrorImageDarkBladeValues],
      ["shadowArts", AssassinValues.ShadowArtsValues],
      ["shadowBurst", AssassinValues.ShadowBurstValues],
      ["shadowCutter", AssassinValues.ShadowCutterValues],
      ["shadowWeb", AssassinValues.ShadowWebValues],
      ["soulGrind", AssassinValues.SoulGrindValues],
      ["starChaser", AssassinValues.StarChaserValues],
      ["starFlurry", AssassinValues.StarFlurryValues],
      ["thrownWeaponMastery", AssassinValues.ThrownWeaponMasteryValues],
    ].map(([skillName, skillValues]) => (
      this.renderMsLevelControl(skillName, skillValues)
    )).concat([
      <ms-assassin ref={(el) => this.assassinChart = el as HTMLMsAssassinElement }></ms-assassin>,
    ]);

    // return ([
    //   <ms-level-control class="darkCloak"
    //                     onLevelchanged={ (evt) => this.levelChanged("darkCloak", evt.detail) }
    //                     min={ AssassinValues.DarkCloakValues.minLevel }
    //                     max={ AssassinValues.DarkCloakValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="deathSentence"
    //                     onLevelchanged={ (evt) => this.levelChanged("deathSentence", evt.detail) }
    //                     min={ AssassinValues.DeathSentenceValues.minLevel }
    //                     max={ AssassinValues.DeathSentenceValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="fatalStrikes"
    //                     onLevelchanged={ (evt) => this.levelChanged("fatalStrikes", evt.detail) }
    //                     min={ AssassinValues.FatalStrikesValues.minLevel }
    //                     max={ AssassinValues.FatalStrikesValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="fragmentedStar"
    //                     onLevelchanged={ (evt) => this.levelChanged("fragmentedStar", evt.detail) }
    //                     min={ AssassinValues.FragmentedStarValues.minLevel }
    //                     max={ AssassinValues.FragmentedStarValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="luckyStars"
    //                     onLevelchanged={ (evt) => this.levelChanged("luckyStars", evt.detail) }
    //                     min={ AssassinValues.LuckyStarsValues.minLevel }
    //                     max={ AssassinValues.LuckyStarsValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="markOfDeath"
    //                     onLevelchanged={ (evt) => this.levelChanged("markOfDeath", evt.detail) }
    //                     min={ AssassinValues.MarkOfDeathValues.minLevel }
    //                     max={ AssassinValues.MarkOfDeathValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="mirrorImageDarkBlade"
    //                     onLevelchanged={ (evt) => this.levelChanged("mirrorImageDarkBlade", evt.detail) }
    //                     min={ AssassinValues.MirrorImageDarkBladeValues.minLevel }
    //                     max={ AssassinValues.MirrorImageDarkBladeValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="shadowArts"
    //                     onLevelchanged={ (evt) => this.levelChanged("shadowArts", evt.detail) }
    //                     min={ AssassinValues.ShadowArtsValues.minLevel }
    //                     max={ AssassinValues.ShadowArtsValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="shadowBurst"
    //                     onLevelchanged={ (evt) => this.levelChanged("shadowBurst", evt.detail) }
    //                     min={ AssassinValues.ShadowBurstValues.minLevel }
    //                     max={ AssassinValues.ShadowBurstValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="shadowCutter"
    //                     onLevelchanged={ (evt) => this.levelChanged("shadowCutter", evt.detail) }
    //                     min={ AssassinValues.ShadowCutterValues.minLevel }
    //                     max={ AssassinValues.ShadowCutterValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="shadowWeb"
    //                     onLevelchanged={ (evt) => this.levelChanged("shadowWeb", evt.detail) }
    //                     min={ AssassinValues.ShadowWebValues.minLevel }
    //                     max={ AssassinValues.ShadowWebValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="soulGrind"
    //                     onLevelchanged={ (evt) => this.levelChanged("soulGrind", evt.detail) }
    //                     min={ AssassinValues.SoulGrindValues.minLevel }
    //                     max={ AssassinValues.SoulGrindValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="starChaser"
    //                     onLevelchanged={ (evt) => this.levelChanged("starChaser", evt.detail) }
    //                     min={ AssassinValues.StarChaserValues.minLevel }
    //                     max={ AssassinValues.StarChaserValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="starFlurry"
    //                     onLevelchanged={ (evt) => this.levelChanged("starFlurry", evt.detail) }
    //                     min={ AssassinValues.StarFlurryValues.minLevel }
    //                     max={ AssassinValues.StarFlurryValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-level-control class="thrownWeaponMastery"
    //                     onLevelchanged={ (evt) => this.levelChanged("thrownWeaponMastery", evt.detail) }
    //                     min={ AssassinValues.ThrownWeaponMasteryValues.minLevel }
    //                     max={ AssassinValues.ThrownWeaponMasteryValues.maxLevel }>
    //   </ms-level-control>,
    //   <ms-assassin ref={(el) => this.assassinChart = el as HTMLMsAssassinElement }></ms-assassin>,
    // ]);
  }
}
