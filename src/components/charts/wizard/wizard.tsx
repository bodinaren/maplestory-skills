import { Component, Prop } from "@stencil/core";
import * as WizardValues from "../../../global/values/wizard";

@Component({
  tag: "ms-wizard",
  styleUrls: ["../charts.scss", "wizard.scss"],
  assetsDir: "assets",
  shadow: true
})
export class WizardComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop({ mutable: true }) arcaneBlast: number = WizardValues.ArcaneBlastValues.minLevel;
  @Prop({ mutable: true }) chainLightning: number = WizardValues.ChainLightningValues.minLevel;
  @Prop({ mutable: true }) cryomancy: number = WizardValues.CryomancyValues.minLevel;
  @Prop({ mutable: true }) electromancy: number = WizardValues.ElectromancyValues.minLevel;
  @Prop({ mutable: true }) elementalMaster: number = WizardValues.ElementalMasterValues.minLevel;
  @Prop({ mutable: true }) flameTornado: number = WizardValues.FlameTornadoValues.minLevel;
  @Prop({ mutable: true }) flameWave: number = WizardValues.FlameWaveValues.minLevel;
  @Prop({ mutable: true }) focusSeal: number = WizardValues.FocusSealValues.minLevel;
  @Prop({ mutable: true }) iceSpear: number = WizardValues.IceSpearValues.minLevel;
  @Prop({ mutable: true }) iceStorm: number = WizardValues.IceStormValues.minLevel;
  @Prop({ mutable: true }) magicArmor: number = WizardValues.MagicArmorValues.minLevel;
  @Prop({ mutable: true }) manaClaw: number = WizardValues.ManaClawValues.minLevel;
  @Prop({ mutable: true }) manaFont: number = WizardValues.ManaFontValues.minLevel;
  @Prop({ mutable: true }) phantomClaw: number = WizardValues.PhantomClawValues.minLevel;
  @Prop({ mutable: true }) pyromancy: number = WizardValues.PyromancyValues.minLevel;
  @Prop({ mutable: true }) teleport: number = WizardValues.TeleportValues.minLevel;
  @Prop({ mutable: true }) thunderbolt: number = WizardValues.ThunderboltValues.minLevel;

  render() {
    return (
      <div class="chart wizard" style={{ backgroundImage: `url(${ this.publicPath }assets/wizard.jpg)` }}>
        <ms-arcane-blast level={ this.arcaneBlast }></ms-arcane-blast>
        <ms-chain-lightning level={ this.chainLightning }></ms-chain-lightning>
        <ms-cryomancy level={ this.cryomancy }></ms-cryomancy>
        <ms-electromancy level={ this.electromancy }></ms-electromancy>
        <ms-elemental-master level={ this.elementalMaster }></ms-elemental-master>
        <ms-flame-tornado level={ this.flameTornado }></ms-flame-tornado>
        <ms-flame-wave level={ this.flameWave }></ms-flame-wave>
        <ms-focus-seal level={ this.focusSeal }></ms-focus-seal>
        <ms-ice-spear level={ this.iceSpear }></ms-ice-spear>
        <ms-ice-storm level={ this.iceStorm }></ms-ice-storm>
        <ms-magic-armor level={ this.magicArmor }></ms-magic-armor>
        <ms-mana-claw level={ this.manaClaw }></ms-mana-claw>
        <ms-mana-font level={ this.manaFont }></ms-mana-font>
        <ms-phantom-claw level={ this.phantomClaw }></ms-phantom-claw>
        <ms-pyromancy level={ this.pyromancy }></ms-pyromancy>
        <ms-teleport level={ this.teleport }></ms-teleport>
        <ms-thunderbolt level={ this.thunderbolt }></ms-thunderbolt>
      </div>
    );
  }
}
