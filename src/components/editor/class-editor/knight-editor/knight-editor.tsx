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
    ["bulwark", "bulwark", KnightValues.BulwarkValues, true],
    ["cross-cut", "crossCut", KnightValues.CrossCutValues, true],
    ["defender-of-the-faith", "defenderOfTheFaith", KnightValues.DefenderOfTheFaithValues, true],
    ["divine-strike", "divineStrike", KnightValues.DivineStrikeValues, true],
    ["drill-thrust", "drillThrust", KnightValues.DrillThrustValues, true],
    ["iron-defense", "ironDefense", KnightValues.IronDefenseValues, false],
    ["iron-shield", "ironShield", KnightValues.IronShieldValues, true],
    ["longsword-mastery", "longswordMastery", KnightValues.LongswordMasteryValues, true],
    ["shield-booster", "shieldBooster", KnightValues.ShieldBoosterValues, true],
    ["shield-charge", "shieldCharge", KnightValues.ShieldChargeValues, false],
    ["shield-mastery", "shieldMastery", KnightValues.ShieldMasteryValues, true],
    ["shield-toss", "shieldToss", KnightValues.ShieldTossValues, true],
    ["shield-wall", "shieldWall", KnightValues.ShieldWallValues, true],
    ["stinging-flurry", "stingingFlurry", KnightValues.StingingFlurryValues, true],
    ["tornado-slash", "tornadoSlash", KnightValues.TornadoSlashValues, true],
    ["typhoon-slash", "typhoonSlash", KnightValues.TyphoonSlashValues, true],
    ["warhorn", "warhorn", KnightValues.WarhornValues, true],
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
      ...renderLevelControls(this, this.properties),
      <ms-knight ref={(el) => this.knightChart = el as HTMLMsKnightElement }></ms-knight>,
    ];
  }
}
