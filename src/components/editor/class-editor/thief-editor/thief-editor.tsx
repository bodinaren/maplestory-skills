import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as ThiefSkills from "../../../../global/values/thief";

@Component({
  tag: "ms-thief-editor",
  styleUrl: "thief-editor.scss",
  shadow: true
})
export class ThiefEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  thiefChart!: HTMLMsThiefElement;

  private properties: ClassProperties[] = [
    ["blade-dance", "bladeDance", ThiefSkills.BladeDance, true],
    ["cunning-tactics", "cunningTactics", ThiefSkills.CunningTactics, true],
    ["deft-combatant", "deftCombatant", ThiefSkills.DeftCombatant, true],
    ["double-slash", "doubleSlash", ThiefSkills.DoubleSlash, true],
    ["haste", "haste", ThiefSkills.Haste, true],
    ["mesoguard-plus", "mesoguardPlus", ThiefSkills.MesoguardPlus, true],
    ["mind-breaker", "mindBreaker", ThiefSkills.MindBreaker, true],
    ["mind-stealer", "mindStealer", ThiefSkills.MindStealer, false],
    ["poison-edge", "poisonEdge", ThiefSkills.PoisonEdge, true],
    ["poison-vial", "poisonVial", ThiefSkills.PoisonVial, true],
    ["quick-step", "quickStep", ThiefSkills.QuickStep, true],
    ["retaliation", "retaliation", ThiefSkills.Retaliation, true],
    ["ruthless-guile", "ruthlessGuile", ThiefSkills.RuthlessGuile, true],
    ["somersault-kick", "somersaultKick", ThiefSkills.SomersaultKick, true],
    ["spirit-thief", "spiritThief", ThiefSkills.SpiritThief, false],
    ["surprise-attack", "surpriseAttack", ThiefSkills.SurpriseAttack, true],
    ["vicious-cuts", "viciousCuts", ThiefSkills.ViciousCuts, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.thiefChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-thief ${ renderProperties(this.thiefChart, this.properties) }></ms-thief>`);
  }

  render() {
    return [
      <ms-thief ref={(el) => this.thiefChart = el as HTMLMsThiefElement }></ms-thief>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
