import { Component, Method, Event, EventEmitter } from "@stencil/core";
import { ClassProperties, renderProperties, renderLevelControls  } from "../class-editor-helpers";
import * as WizardValues from "../../../../global/values/wizard";

@Component({
  tag: "ms-wizard-editor",
  styleUrl: "wizard-editor.scss",
  shadow: true
})
export class WizardEditorComponent {

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  wizardChart!: HTMLMsWizardElement;

  private properties: ClassProperties[] = [
    ["arcane-blast", "arcaneBlast", WizardValues.ArcaneBlastValues, true],
    ["chain-lightning", "chainLightning", WizardValues.ChainLightningValues, true],
    ["cryomancy", "cryomancy", WizardValues.CryomancyValues, true],
    ["electromancy", "electromancy", WizardValues.ElectromancyValues, true],
    ["elemental-master", "elementalMaster", WizardValues.ElementalMasterValues, true],
    ["flame-tornado", "flameTornado", WizardValues.FlameTornadoValues, true],
    ["flame-wave", "flameWave", WizardValues.FlameWaveValues, true],
    ["focus-seal", "focusSeal", WizardValues.FocusSealValues, true],
    ["ice-spear", "iceSpear", WizardValues.IceSpearValues, true],
    ["ice-storm", "iceStorm", WizardValues.IceStormValues, true],
    ["magic-armor", "magicArmor", WizardValues.MagicArmorValues, true],
    ["mana-claw", "manaClaw", WizardValues.ManaClawValues, true],
    ["mana-font", "manaFont", WizardValues.ManaFontValues, false],
    ["phantom-claw", "phantomClaw", WizardValues.PhantomClawValues, true],
    ["pyromancy", "pyromancy", WizardValues.PyromancyValues, true],
    ["teleport", "teleport", WizardValues.TeleportValues, false],
    ["thunderbolt", "thunderbolt", WizardValues.ThunderboltValues, true],
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
