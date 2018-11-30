import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as WizardSkills from "../../../../global/values/wizard";

@Component({
  tag: "ms-wizard-editor",
  styleUrl: "wizard-editor.scss",
  shadow: true
})
export class WizardEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  wizardChart!: HTMLMsWizardElement;

  private properties: ClassProperties[] = [
    ["arcane-blast", "arcaneBlast", WizardSkills.ArcaneBlast, true],
    ["chain-lightning", "chainLightning", WizardSkills.ChainLightning, true],
    ["cryomancy", "cryomancy", WizardSkills.Cryomancy, true],
    ["electromancy", "electromancy", WizardSkills.Electromancy, true],
    ["elemental-master", "elementalMaster", WizardSkills.ElementalMaster, true],
    ["flame-tornado", "flameTornado", WizardSkills.FlameTornado, true],
    ["flame-wave", "flameWave", WizardSkills.FlameWave, true],
    ["focus-seal", "focusSeal", WizardSkills.FocusSeal, true],
    ["ice-spear", "iceSpear", WizardSkills.IceSpear, true],
    ["ice-storm", "iceStorm", WizardSkills.IceStorm, true],
    ["magic-armor", "magicArmor", WizardSkills.MagicArmor, true],
    ["mana-claw", "manaClaw", WizardSkills.ManaClaw, true],
    ["mana-font", "manaFont", WizardSkills.ManaFont, false],
    ["phantom-claw", "phantomClaw", WizardSkills.PhantomClaw, true],
    ["pyromancy", "pyromancy", WizardSkills.Pyromancy, true],
    ["teleport", "teleport", WizardSkills.Teleport, false],
    ["thunderbolt", "thunderbolt", WizardSkills.Thunderbolt, true],
  ];

  async levelChanged(skillName: string, level: number) {
    this.wizardChart[skillName] = level;

    this.onSkillChanged.emit(await this.toHtmlString());
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-wizard ${ renderProperties(this.wizardChart, this.properties) }></ms-wizard>`);
  }

  render() {
    return [
      <ms-wizard ref={(el) => this.wizardChart = el as HTMLMsWizardElement }></ms-wizard>,
      ...renderLevelControls(this, this.properties),
    ];
  }
}
