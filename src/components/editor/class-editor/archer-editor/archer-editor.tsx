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
    ["agile-archer", "agileArcher",  ArcherValues.AgileArcher, true],
    ["arrow-barrage", "arrowBarrage",  ArcherValues.ArrowBarrage, true],
    ["arrow-storm", "arrowStorm",  ArcherValues.ArrowStorm, true],
    ["arrow-stream", "arrowStream",  ArcherValues.ArrowStream, true],
    ["bow-swing", "bowSwing",  ArcherValues.BowSwing, true],
    ["bronze-eagle", "bronzeEagle",  ArcherValues.BronzeEagle, true],
    ["conditioning", "conditioning",  ArcherValues.Conditioning, true],
    ["eagle-claw", "eagleClaw",  ArcherValues.EagleClaw, true],
    ["eagle-glide", "eagleGlide",  ArcherValues.EagleGlide, false],
    ["eagles-majesty", "eaglesMajesty",  ArcherValues.EaglesMajesty, true],
    ["evasive-salvo", "evasiveSalvo",  ArcherValues.EvasiveSalvo, true],
    ["ice-arrow", "iceArrow",  ArcherValues.IceArrow, true],
    ["precision-shooter", "precisionShooter",  ArcherValues.PrecisionShooter, true],
    ["rapid-shot", "rapidShot",  ArcherValues.RapidShot, true],
    ["screwdriver-shot", "screwdriverShot",  ArcherValues.ScrewdriverShot, true],
    ["sharp-eyes", "sharpEyes",  ArcherValues.SharpEyes, true],
    ["snipe", "snipe",  ArcherValues.Snipe, false],
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
      <ms-archer ref={(el) => this.archerChart = el as HTMLMsArcherElement }></ms-archer>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
