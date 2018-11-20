import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as RunebladeValues from "../../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade-editor",
  styleUrl: "runeblade-editor.scss",
  shadow: true
})
export class RunebladeEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  runebladeChart!: HTMLMsRunebladeElement;

  private properties: ClassProperties[] = [
    ["blade-chasm", "bladeChasm" , RunebladeValues.BladeChasmValues, true],
    ["blade-mastery", "bladeMastery" , RunebladeValues.BladeMasteryValues, true],
    ["blink", "blink" , RunebladeValues.BlinkValues, false],
    ["elemental-potency", "elementalPotency" , RunebladeValues.ElementalPotencyValues, true],
    ["echoing-blade", "echoingBlade" , RunebladeValues.EchoingBladeValues, true],
    ["flame-sigil", "flameSigil" , RunebladeValues.FlameSigilValues, true],
    ["flurry", "flurry" , RunebladeValues.FlurryValues, true],
    ["frost-sigil", "frostSigil" , RunebladeValues.FrostSigilValues, true],
    ["gravity-rune", "gravityRune" , RunebladeValues.GravityRuneValues, true],
    ["honing-runes", "honingRunes" , RunebladeValues.HoningRunesValues, true],
    ["illusory-blades", "illusoryBlades" , RunebladeValues.IllusoryBladesValues, true],
    ["impact", "impact" , RunebladeValues.ImpactValues, true],
    ["rune-balance", "runeBalance" , RunebladeValues.RuneBalanceValues, false],
    ["rune-focus", "runeFocus" , RunebladeValues.RuneFocusValues, true],
    ["storm-sigil", "stormSigil" , RunebladeValues.StormSigilValues, true],
    ["warding-rune", "wardingRune" , RunebladeValues.WardingRuneValues, true],
    ["whirling-blades", "whirlingBlades" , RunebladeValues.WhirlingBladesValues, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.runebladeChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-runeblade ${ renderProperties(this.runebladeChart, this.properties) }></ms-runeblade>`);
  }

  render() {
    return [
      ...renderLevelControls(this, this.properties),
      <ms-runeblade ref={(el) => this.runebladeChart = el as HTMLMsRunebladeElement }></ms-runeblade>,
    ];
  }
}
