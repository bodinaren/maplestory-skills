import { Component, Method, Event, EventEmitter, Prop } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as ArcherValues from "../../../../global/values/archer";

@Component({
  tag: "ms-archer-editor",
  styleUrl: "archer-editor.scss",
  shadow: true
})
export class ArcherEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  @Prop() scale: number;

  archerChart!: HTMLMsArcherElement;

  private properties: ClassProperties[] = [
    ["agile-archer", "agileArcher",  ArcherValues.AgileArcherValues, true],
    ["arrow-barrage", "arrowBarrage",  ArcherValues.ArrowBarrageValues, true],
    ["arrow-storm", "arrowStorm",  ArcherValues.ArrowStormValues, true],
    ["arrow-stream", "arrowStream",  ArcherValues.ArrowStreamValues, true],
    ["bow-swing", "bowSwing",  ArcherValues.BowSwingValues, true],
    ["bronze-eagle", "bronzeEagle",  ArcherValues.BronzeEagleValues, true],
    ["conditioning", "conditioning",  ArcherValues.ConditioningValues, true],
    ["eagle-claw", "eagleClaw",  ArcherValues.EagleClawValues, true],
    ["eagle-glide", "eagleGlide",  ArcherValues.EagleGlideValues, false],
    ["eagles-majesty", "eaglesMajesty",  ArcherValues.EaglesMajestyValues, true],
    ["evasive-salvo", "evasiveSalvo",  ArcherValues.EvasiveSalvoValues, true],
    ["ice-arrow", "iceArrow",  ArcherValues.IceArrowValues, true],
    ["precision-shooter", "precisionShooter",  ArcherValues.PrecisionShooterValues, true],
    ["rapid-shot", "rapidShot",  ArcherValues.RapidShotValues, true],
    ["screwdriver-shot", "screwdriverShot",  ArcherValues.ScrewdriverShotValues, true],
    ["sharp-eyes", "sharpEyes",  ArcherValues.SharpEyesValues, true],
    ["snipe", "snipe",  ArcherValues.SnipeValues, false],
  ];

  async levelChanged(skillName: string, level: number) {
    this.archerChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-archer ${ renderProperties(this.archerChart, this.properties) }></ms-archer>`);
  }

  render() {
    return [
      ...renderLevelControls(this, this.properties),
      <ms-archer ref={(el) => this.archerChart = el as HTMLMsArcherElement }></ms-archer>,
    ];
  }
}
