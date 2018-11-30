import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as RunebladeSkills from "../../../../global/values/runeblade";

@Component({
  tag: "ms-runeblade-editor",
  styleUrl: "runeblade-editor.scss",
  shadow: true
})
export class RunebladeEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  runebladeChart!: HTMLMsRunebladeElement;

  private properties: ClassProperties[] = [
    ["blade-chasm", "bladeChasm" , RunebladeSkills.BladeChasm, true],
    ["blade-mastery", "bladeMastery" , RunebladeSkills.BladeMastery, true],
    ["blink", "blink" , RunebladeSkills.Blink, false],
    ["elemental-potency", "elementalPotency" , RunebladeSkills.ElementalPotency, true],
    ["echoing-blade", "echoingBlade" , RunebladeSkills.EchoingBlade, true],
    ["flame-sigil", "flameSigil" , RunebladeSkills.FlameSigil, true],
    ["flurry", "flurry" , RunebladeSkills.Flurry, true],
    ["frost-sigil", "frostSigil" , RunebladeSkills.FrostSigil, true],
    ["gravity-rune", "gravityRune" , RunebladeSkills.GravityRune, true],
    ["honing-runes", "honingRunes" , RunebladeSkills.HoningRunes, true],
    ["illusory-blades", "illusoryBlades" , RunebladeSkills.IllusoryBlades, true],
    ["impact", "impact" , RunebladeSkills.Impact, true],
    ["rune-balance", "runeBalance" , RunebladeSkills.RuneBalance, false],
    ["rune-focus", "runeFocus" , RunebladeSkills.RuneFocus, true],
    ["storm-sigil", "stormSigil" , RunebladeSkills.StormSigil, true],
    ["warding-rune", "wardingRune" , RunebladeSkills.WardingRune, true],
    ["whirling-blades", "whirlingBlades" , RunebladeSkills.WhirlingBlades, true],
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
      <ms-runeblade ref={(el) => this.runebladeChart = el as HTMLMsRunebladeElement }></ms-runeblade>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
