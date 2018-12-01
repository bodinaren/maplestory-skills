import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as WizardSkills from "../../../global/values/wizard";

@Component({
  tag: "ms-wizard",
  styleUrls: ["wizard.scss"],
  shadow: true
})
export class WizardComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

  @Prop({ mutable: true }) arcaneBlast: number = WizardSkills.ArcaneBlast.minLevel;
  @Prop({ mutable: true }) chainLightning: number = WizardSkills.ChainLightning.minLevel;
  @Prop({ mutable: true }) cryomancy: number = WizardSkills.Cryomancy.minLevel;
  @Prop({ mutable: true }) electromancy: number = WizardSkills.Electromancy.minLevel;
  @Prop({ mutable: true }) elementalMaster: number = WizardSkills.ElementalMaster.minLevel;
  @Prop({ mutable: true }) flameTornado: number = WizardSkills.FlameTornado.minLevel;
  @Prop({ mutable: true }) flameWave: number = WizardSkills.FlameWave.minLevel;
  @Prop({ mutable: true }) focusSeal: number = WizardSkills.FocusSeal.minLevel;
  @Prop({ mutable: true }) iceSpear: number = WizardSkills.IceSpear.minLevel;
  @Prop({ mutable: true }) iceStorm: number = WizardSkills.IceStorm.minLevel;
  @Prop({ mutable: true }) magicArmor: number = WizardSkills.MagicArmor.minLevel;
  @Prop({ mutable: true }) manaClaw: number = WizardSkills.ManaClaw.minLevel;
  @Prop({ mutable: true }) manaFont: number = WizardSkills.ManaFont.minLevel;
  @Prop({ mutable: true }) phantomClaw: number = WizardSkills.PhantomClaw.minLevel;
  @Prop({ mutable: true }) pyromancy: number = WizardSkills.Pyromancy.minLevel;
  @Prop({ mutable: true }) teleport: number = WizardSkills.Teleport.minLevel;
  @Prop({ mutable: true }) thunderbolt: number = WizardSkills.Thunderbolt.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, WizardSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, WizardSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, WizardSkills));
  }

  render() {
    return (
      <ms-chart msClass="wizard">
        { renderLevelControls(this, WizardSkills.ArcaneBlast, this.editable,
          <ms-arcane-blast level={ this.arcaneBlast }></ms-arcane-blast>
        )}
        { renderLevelControls(this, WizardSkills.ChainLightning, this.editable,
          <ms-chain-lightning level={ this.chainLightning }></ms-chain-lightning>
        )}
        { renderLevelControls(this, WizardSkills.Cryomancy, this.editable,
          <ms-cryomancy level={ this.cryomancy }></ms-cryomancy>
        )}
        { renderLevelControls(this, WizardSkills.Electromancy, this.editable,
          <ms-electromancy level={ this.electromancy }></ms-electromancy>
        )}
        { renderLevelControls(this, WizardSkills.ElementalMaster, this.editable,
          <ms-elemental-master level={ this.elementalMaster }></ms-elemental-master>
        )}
        { renderLevelControls(this, WizardSkills.FlameTornado, this.editable,
          <ms-flame-tornado level={ this.flameTornado }></ms-flame-tornado>
        )}
        { renderLevelControls(this, WizardSkills.FlameWave, this.editable,
          <ms-flame-wave level={ this.flameWave }></ms-flame-wave>
        )}
        { renderLevelControls(this, WizardSkills.FocusSeal, this.editable,
          <ms-focus-seal level={ this.focusSeal }></ms-focus-seal>
        )}
        { renderLevelControls(this, WizardSkills.IceSpear, this.editable,
          <ms-ice-spear level={ this.iceSpear }></ms-ice-spear>
        )}
        { renderLevelControls(this, WizardSkills.IceStorm, this.editable,
          <ms-ice-storm level={ this.iceStorm }></ms-ice-storm>
        )}
        { renderLevelControls(this, WizardSkills.MagicArmor, this.editable,
          <ms-magic-armor level={ this.magicArmor }></ms-magic-armor>
        )}
        { renderLevelControls(this, WizardSkills.ManaClaw, this.editable,
          <ms-mana-claw level={ this.manaClaw }></ms-mana-claw>
        )}
        { renderLevelControls(this, WizardSkills.ManaFont, this.editable,
          <ms-mana-font level={ this.manaFont }></ms-mana-font>
        )}
        { renderLevelControls(this, WizardSkills.PhantomClaw, this.editable,
          <ms-phantom-claw level={ this.phantomClaw }></ms-phantom-claw>
        )}
        { renderLevelControls(this, WizardSkills.Pyromancy, this.editable,
          <ms-pyromancy level={ this.pyromancy }></ms-pyromancy>
        )}
        { renderLevelControls(this, WizardSkills.Teleport, this.editable,
          <ms-teleport level={ this.teleport }></ms-teleport>
        )}
        { renderLevelControls(this, WizardSkills.Thunderbolt, this.editable,
          <ms-thunderbolt level={ this.thunderbolt }></ms-thunderbolt>
        )}
      </ms-chart>
    );
  }
}
