import { Component, Prop } from "@stencil/core";
import * as ThiefValues from "../../../global/values/thief";

@Component({
  tag: "ms-thief",
  styleUrls: ["thief.scss"],
  shadow: true
})
export class ThiefComponent {

  @Prop({ mutable: true }) bladeDance: number = ThiefValues.BladeDanceValues.minLevel;
  @Prop({ mutable: true }) cunningTactics: number = ThiefValues.CunningTacticsValues.minLevel;
  @Prop({ mutable: true }) deftCombatant: number = ThiefValues.DeftCombatantValues.minLevel;
  @Prop({ mutable: true }) doubleSlash: number = ThiefValues.DoubleSlashValues.minLevel;
  @Prop({ mutable: true }) haste: number = ThiefValues.HasteValues.minLevel;
  @Prop({ mutable: true }) mesoguardPlus: number = ThiefValues.MesoguardPlusValues.minLevel;
  @Prop({ mutable: true }) mindBreaker: number = ThiefValues.MindBreakerValues.minLevel;
  @Prop({ mutable: true }) mindStealer: number = ThiefValues.MindStealerValues.minLevel;
  @Prop({ mutable: true }) poisonEdge: number = ThiefValues.PoisonEdgeValues.minLevel;
  @Prop({ mutable: true }) poisonVial: number = ThiefValues.PoisonVialValues.minLevel;
  @Prop({ mutable: true }) quickStep: number = ThiefValues.QuickStepValues.minLevel;
  @Prop({ mutable: true }) retaliation: number = ThiefValues.RetaliationValues.minLevel;
  @Prop({ mutable: true }) ruthlessGuile: number = ThiefValues.RuthlessGuileValues.minLevel;
  @Prop({ mutable: true }) somersaultKick: number = ThiefValues.SomersaultKickValues.minLevel;
  @Prop({ mutable: true }) spiritThief: number = ThiefValues.SpiritThiefValues.minLevel;
  @Prop({ mutable: true }) surpriseAttack: number = ThiefValues.SurpriseAttackValues.minLevel;
  @Prop({ mutable: true }) viciousCuts: number = ThiefValues.ViciousCutsValues.minLevel;

  render() {
    return (
      <ms-chart msClass="thief">
        <ms-blade-dance level={ this.bladeDance }></ms-blade-dance>
        <ms-cunning-tactics level={ this.cunningTactics }></ms-cunning-tactics>
        <ms-deft-combatant level={ this.deftCombatant }></ms-deft-combatant>
        <ms-double-slash level={ this.doubleSlash }></ms-double-slash>
        <ms-haste level={ this.haste }></ms-haste>
        <ms-mesoguard-plus level={ this.mesoguardPlus }></ms-mesoguard-plus>
        <ms-mind-breaker level={ this.mindBreaker }></ms-mind-breaker>
        <ms-mind-stealer level={ this.mindStealer }></ms-mind-stealer>
        <ms-poison-edge level={ this.poisonEdge }></ms-poison-edge>
        <ms-poison-vial level={ this.poisonVial }></ms-poison-vial>
        <ms-quick-step level={ this.quickStep }></ms-quick-step>
        <ms-retaliation level={ this.retaliation }></ms-retaliation>
        <ms-ruthless-guile level={ this.ruthlessGuile }></ms-ruthless-guile>
        <ms-somersault-kick level={ this.somersaultKick }></ms-somersault-kick>
        <ms-spirit-thief level={ this.spiritThief }></ms-spirit-thief>
        <ms-surprise-attack level={ this.surpriseAttack }></ms-surprise-attack>
        <ms-vicious-cuts level={ this.viciousCuts }></ms-vicious-cuts>
      </ms-chart>
    );
  }
}
