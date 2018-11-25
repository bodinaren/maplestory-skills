import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as ThiefValues from "../../../../global/values/thief";

@Component({
  tag: "ms-thief-editor",
  styleUrl: "thief-editor.scss",
  shadow: true
})
export class ThiefEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  thiefChart!: HTMLMsThiefElement;

  private properties: ClassProperties[] = [
    ["blade-dance", "bladeDance", ThiefValues.BladeDanceValues, true],
    ["cunning-tactics", "cunningTactics", ThiefValues.CunningTacticsValues, true],
    ["deft-combatant", "deftCombatant", ThiefValues.DeftCombatantValues, true],
    ["double-slash", "doubleSlash", ThiefValues.DoubleSlashValues, true],
    ["haste", "haste", ThiefValues.HasteValues, true],
    ["mesoguard-plus", "mesoguardPlus", ThiefValues.MesoguardPlusValues, true],
    ["mind-breaker", "mindBreaker", ThiefValues.MindBreakerValues, true],
    ["mind-stealer", "mindStealer", ThiefValues.MindStealerValues, false],
    ["poison-edge", "poisonEdge", ThiefValues.PoisonEdgeValues, true],
    ["poison-vial", "poisonVial", ThiefValues.PoisonVialValues, true],
    ["quick-step", "quickStep", ThiefValues.QuickStepValues, true],
    ["retaliation", "retaliation", ThiefValues.RetaliationValues, true],
    ["ruthless-guile", "ruthlessGuile", ThiefValues.RuthlessGuileValues, true],
    ["somersault-kick", "somersaultKick", ThiefValues.SomersaultKickValues, true],
    ["spirit-thief", "spiritThief", ThiefValues.SpiritThiefValues, false],
    ["surprise-attack", "surpriseAttack", ThiefValues.SurpriseAttackValues, true],
    ["vicious-cuts", "viciousCuts", ThiefValues.ViciousCutsValues, true],
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
      ...renderLevelControls(this, this.properties),
      <ms-thief ref={(el) => this.thiefChart = el as HTMLMsThiefElement }></ms-thief>,
    ];
  }
}
