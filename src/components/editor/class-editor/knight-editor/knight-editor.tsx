import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as KnightValues from "../../../../global/values/knight";

@Component({
  tag: "ms-knight-editor",
  styleUrl: "knight-editor.scss",
  shadow: true
})
export class KnightEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  knightChart!: HTMLMsKnightElement;

  private properties: ClassProperties[] = [
    ["bulwark", "bulwark", KnightValues.Bulwark, true],
    ["cross-cut", "crossCut", KnightValues.CrossCut, true],
    ["defender-of-the-faith", "defenderOfTheFaith", KnightValues.DefenderOfTheFaith, true],
    ["divine-strike", "divineStrike", KnightValues.DivineStrike, true],
    ["drill-thrust", "drillThrust", KnightValues.DrillThrust, true],
    ["iron-defense", "ironDefense", KnightValues.IronDefense, false],
    ["iron-shield", "ironShield", KnightValues.IronShield, true],
    ["longsword-mastery", "longswordMastery", KnightValues.LongswordMastery, true],
    ["shield-booster", "shieldBooster", KnightValues.ShieldBooster, true],
    ["shield-charge", "shieldCharge", KnightValues.ShieldCharge, false],
    ["shield-mastery", "shieldMastery", KnightValues.ShieldMastery, true],
    ["shield-toss", "shieldToss", KnightValues.ShieldToss, true],
    ["shield-wall", "shieldWall", KnightValues.ShieldWall, true],
    ["stinging-flurry", "stingingFlurry", KnightValues.StingingFlurry, true],
    ["tornado-slash", "tornadoSlash", KnightValues.TornadoSlash, true],
    ["typhoon-slash", "typhoonSlash", KnightValues.TyphoonSlash, true],
    ["warhorn", "warhorn", KnightValues.Warhorn, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.knightChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-knight ${ renderProperties(this.knightChart, this.properties) }></ms-knight>`);
  }

  render() {
    return [
      <ms-knight ref={(el) => this.knightChart = el as HTMLMsKnightElement }></ms-knight>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
