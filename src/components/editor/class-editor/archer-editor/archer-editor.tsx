import { Component, Method, Event, EventEmitter, Prop } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as ArcherSkills from "../../../../global/values/archer";

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
    ["agile-archer", "agileArcher",  ArcherSkills.AgileArcher, true],
    ["arrow-barrage", "arrowBarrage",  ArcherSkills.ArrowBarrage, true],
    ["arrow-storm", "arrowStorm",  ArcherSkills.ArrowStorm, true],
    ["arrow-stream", "arrowStream",  ArcherSkills.ArrowStream, true],
    ["bow-swing", "bowSwing",  ArcherSkills.BowSwing, true],
    ["bronze-eagle", "bronzeEagle",  ArcherSkills.BronzeEagle, true],
    ["conditioning", "conditioning",  ArcherSkills.Conditioning, true],
    ["eagle-claw", "eagleClaw",  ArcherSkills.EagleClaw, true],
    ["eagle-glide", "eagleGlide",  ArcherSkills.EagleGlide, false],
    ["eagles-majesty", "eaglesMajesty",  ArcherSkills.EaglesMajesty, true],
    ["evasive-salvo", "evasiveSalvo",  ArcherSkills.EvasiveSalvo, true],
    ["ice-arrow", "iceArrow",  ArcherSkills.IceArrow, true],
    ["precision-shooter", "precisionShooter",  ArcherSkills.PrecisionShooter, true],
    ["rapid-shot", "rapidShot",  ArcherSkills.RapidShot, true],
    ["screwdriver-shot", "screwdriverShot",  ArcherSkills.ScrewdriverShot, true],
    ["sharp-eyes", "sharpEyes",  ArcherSkills.SharpEyes, true],
    ["snipe", "snipe",  ArcherSkills.Snipe, false],
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
