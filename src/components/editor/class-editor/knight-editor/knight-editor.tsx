import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as KnightSkills from "../../../../global/values/knight";

@Component({
  tag: "ms-knight-editor",
  styleUrl: "knight-editor.scss",
  shadow: true
})
export class KnightEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  knightChart!: HTMLMsKnightElement;

  private properties: ClassProperties[] = [
    ["bulwark", "bulwark", KnightSkills.Bulwark, true],
    ["cross-cut", "crossCut", KnightSkills.CrossCut, true],
    ["defender-of-the-faith", "defenderOfTheFaith", KnightSkills.DefenderOfTheFaith, true],
    ["divine-strike", "divineStrike", KnightSkills.DivineStrike, true],
    ["drill-thrust", "drillThrust", KnightSkills.DrillThrust, true],
    ["iron-defense", "ironDefense", KnightSkills.IronDefense, false],
    ["iron-shield", "ironShield", KnightSkills.IronShield, true],
    ["longsword-mastery", "longswordMastery", KnightSkills.LongswordMastery, true],
    ["shield-booster", "shieldBooster", KnightSkills.ShieldBooster, true],
    ["shield-charge", "shieldCharge", KnightSkills.ShieldCharge, false],
    ["shield-mastery", "shieldMastery", KnightSkills.ShieldMastery, true],
    ["shield-toss", "shieldToss", KnightSkills.ShieldToss, true],
    ["shield-wall", "shieldWall", KnightSkills.ShieldWall, true],
    ["stinging-flurry", "stingingFlurry", KnightSkills.StingingFlurry, true],
    ["tornado-slash", "tornadoSlash", KnightSkills.TornadoSlash, true],
    ["typhoon-slash", "typhoonSlash", KnightSkills.TyphoonSlash, true],
    ["warhorn", "warhorn", KnightSkills.Warhorn, true],
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
