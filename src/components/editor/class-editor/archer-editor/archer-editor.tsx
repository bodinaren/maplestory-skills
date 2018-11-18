import { Component, Method, Event, EventEmitter } from "@stencil/core";
import * as ArcherValues from "../../../../global/values/archer";

@Component({
  tag: "ms-archer-editor",
  styleUrl: "archer-editor.scss",
  shadow: true
})
export class ArcherEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  archerChart!: HTMLMsArcherElement;

  async levelChanged(skillName: string, level: number) {
    this.archerChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    let props = [
      this.archerChart.agileArcher > ArcherValues.AgileArcherValues.minLevel && `agile-archer="${ this.archerChart.agileArcher }"`,
      this.archerChart.arrowBarrage > ArcherValues.ArrowBarrageValues.minLevel && `arrow-barrage="${ this.archerChart.arrowBarrage }"`,
      this.archerChart.arrowStorm > ArcherValues.ArrowStormValues.minLevel && `arrow-storm="${ this.archerChart.arrowStorm }"`,
      this.archerChart.arrowStream > ArcherValues.ArrowStreamValues.minLevel && `arrow-stream="${ this.archerChart.arrowStream }"`,
      this.archerChart.bowSwing > ArcherValues.BowSwingValues.minLevel && `bow-swing="${ this.archerChart.bowSwing }"`,
      this.archerChart.bronzeEagle > ArcherValues.BronzeEagleValues.minLevel && `bronze-eagle="${ this.archerChart.bronzeEagle }"`,
      this.archerChart.conditioning > ArcherValues.ConditioningValues.minLevel && `conditioning="${ this.archerChart.conditioning }"`,
      this.archerChart.eagleClaw > ArcherValues.EagleClawValues.minLevel && `eagle-claw="${ this.archerChart.eagleClaw }"`,
      this.archerChart.eagleGlide > ArcherValues.EagleGlideValues.minLevel && `eagle-glide="${ this.archerChart.eagleGlide }"`,
      this.archerChart.eaglesMajesty > ArcherValues.EaglesMajestyValues.minLevel && `eagles-majesty="${ this.archerChart.eaglesMajesty }"`,
      this.archerChart.evasiveSalvo > ArcherValues.EvasiveSalvoValues.minLevel && `evasive-salvo="${ this.archerChart.evasiveSalvo }"`,
      this.archerChart.iceArrow > ArcherValues.IceArrowValues.minLevel && `ice-arrow="${ this.archerChart.iceArrow }"`,
      this.archerChart.precisionShooter > ArcherValues.PrecisionShooterValues.minLevel && `precision-shooter="${ this.archerChart.precisionShooter }"`,
      this.archerChart.rapidShot > ArcherValues.RapidShotValues.minLevel && `rapid-shot="${ this.archerChart.rapidShot }"`,
      this.archerChart.screwdriverShot > ArcherValues.ScrewdriverShotValues.minLevel && `screwdriver-shot="${ this.archerChart.screwdriverShot }"`,
    ];

    return Promise.resolve(`<ms-archer ${ props.filter(x => x).join(" ") }></ms-archer>`);
  }

  render() {
    return ([
      <ms-level-control class="agileArcher"
                        onLevelchanged={ (evt) => this.levelChanged("agileArcher", evt.detail) }
                        min={ ArcherValues.AgileArcherValues.minLevel }
                        max={ ArcherValues.AgileArcherValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="arrowBarrage"
                        onLevelchanged={ (evt) => this.levelChanged("arrowBarrage", evt.detail) }
                        min={ ArcherValues.ArrowBarrageValues.minLevel }
                        max={ ArcherValues.ArrowBarrageValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="arrowStorm"
                        onLevelchanged={ (evt) => this.levelChanged("arrowStorm", evt.detail) }
                        min={ ArcherValues.ArrowStormValues.minLevel }
                        max={ ArcherValues.ArrowStormValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="arrowStream"
                        onLevelchanged={ (evt) => this.levelChanged("arrowStream", evt.detail) }
                        min={ ArcherValues.ArrowStreamValues.minLevel }
                        max={ ArcherValues.ArrowStreamValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="bowSwing"
                        onLevelchanged={ (evt) => this.levelChanged("bowSwing", evt.detail) }
                        min={ ArcherValues.BowSwingValues.minLevel }
                        max={ ArcherValues.BowSwingValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="bronzeEagle"
                        onLevelchanged={ (evt) => this.levelChanged("bronzeEagle", evt.detail) }
                        min={ ArcherValues.BronzeEagleValues.minLevel }
                        max={ ArcherValues.BronzeEagleValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="conditioning"
                        onLevelchanged={ (evt) => this.levelChanged("conditioning", evt.detail) }
                        min={ ArcherValues.ConditioningValues.minLevel }
                        max={ ArcherValues.ConditioningValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="eagleClaw"
                        onLevelchanged={ (evt) => this.levelChanged("eagleClaw", evt.detail) }
                        min={ ArcherValues.EagleClawValues.minLevel }
                        max={ ArcherValues.EagleClawValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="eagleGlide"
                        onLevelchanged={ (evt) => this.levelChanged("eagleGlide", evt.detail) }
                        min={ ArcherValues.EagleGlideValues.minLevel }
                        max={ ArcherValues.EagleGlideValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="eaglesMajesty"
                        onLevelchanged={ (evt) => this.levelChanged("eaglesMajesty", evt.detail) }
                        min={ ArcherValues.EaglesMajestyValues.minLevel }
                        max={ ArcherValues.EaglesMajestyValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="evasiveSalvo"
                        onLevelchanged={ (evt) => this.levelChanged("evasiveSalvo", evt.detail) }
                        min={ ArcherValues.EvasiveSalvoValues.minLevel }
                        max={ ArcherValues.EvasiveSalvoValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="iceArrow"
                        onLevelchanged={ (evt) => this.levelChanged("iceArrow", evt.detail) }
                        min={ ArcherValues.IceArrowValues.minLevel }
                        max={ ArcherValues.IceArrowValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="precisionShooter"
                        onLevelchanged={ (evt) => this.levelChanged("precisionShooter", evt.detail) }
                        min={ ArcherValues.PrecisionShooterValues.minLevel }
                        max={ ArcherValues.PrecisionShooterValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="rapidShot"
                        onLevelchanged={ (evt) => this.levelChanged("rapidShot", evt.detail) }
                        min={ ArcherValues.RapidShotValues.minLevel }
                        max={ ArcherValues.RapidShotValues.maxLevel }>
      </ms-level-control>,
      <ms-level-control class="screwdriverShot"
                        onLevelchanged={ (evt) => this.levelChanged("screwdriverShot", evt.detail) }
                        min={ ArcherValues.ScrewdriverShotValues.minLevel }
                        max={ ArcherValues.ScrewdriverShotValues.maxLevel }>
      </ms-level-control>,
      <ms-archer ref={(el) => this.archerChart = el as HTMLMsArcherElement }></ms-archer>,
    ]);
  }
}
