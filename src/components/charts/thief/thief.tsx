import { Component, Prop, State } from "@stencil/core";
import { processSkills, renderLevelControls } from "../class-chart-helpers";
import * as ThiefSkills from "../../../global/values/thief";

@Component({
  tag: "ms-thief",
  styleUrls: ["thief.scss"],
  shadow: true
})
export class ThiefComponent {

  @Prop() editable: boolean = false;

  @Prop({ mutable: true }) bladeDance: number = ThiefSkills.BladeDance.minLevel;
  @Prop({ mutable: true }) cunningTactics: number = ThiefSkills.CunningTactics.minLevel;
  @Prop({ mutable: true }) deftCombatant: number = ThiefSkills.DeftCombatant.minLevel;
  @Prop({ mutable: true }) doubleSlash: number = ThiefSkills.DoubleSlash.minLevel;
  @Prop({ mutable: true }) haste: number = ThiefSkills.Haste.minLevel;
  @Prop({ mutable: true }) mesoguardPlus: number = ThiefSkills.MesoguardPlus.minLevel;
  @Prop({ mutable: true }) mindBreaker: number = ThiefSkills.MindBreaker.minLevel;
  @Prop({ mutable: true }) mindStealer: number = ThiefSkills.MindStealer.minLevel;
  @Prop({ mutable: true }) poisonEdge: number = ThiefSkills.PoisonEdge.minLevel;
  @Prop({ mutable: true }) poisonVial: number = ThiefSkills.PoisonVial.minLevel;
  @Prop({ mutable: true }) quickStep: number = ThiefSkills.QuickStep.minLevel;
  @Prop({ mutable: true }) retaliation: number = ThiefSkills.Retaliation.minLevel;
  @Prop({ mutable: true }) ruthlessGuile: number = ThiefSkills.RuthlessGuile.minLevel;
  @Prop({ mutable: true }) somersaultKick: number = ThiefSkills.SomersaultKick.minLevel;
  @Prop({ mutable: true }) spiritThief: number = ThiefSkills.SpiritThief.minLevel;
  @Prop({ mutable: true }) surpriseAttack: number = ThiefSkills.SurpriseAttack.minLevel;
  @Prop({ mutable: true }) viciousCuts: number = ThiefSkills.ViciousCuts.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  componentWillLoad() {
    processSkills(this, ThiefSkills);
  }

  render() {
    return (
      <ms-chart msClass="thief">
        { renderLevelControls(this, ThiefSkills, ThiefSkills.BladeDance, this.editable,
          <ms-blade-dance level={ this.bladeDance }></ms-blade-dance>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.CunningTactics, this.editable,
          <ms-cunning-tactics level={ this.cunningTactics }></ms-cunning-tactics>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.DeftCombatant, this.editable,
          <ms-deft-combatant level={ this.deftCombatant }></ms-deft-combatant>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.DoubleSlash, this.editable,
          <ms-double-slash level={ this.doubleSlash }></ms-double-slash>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.Haste, this.editable,
          <ms-haste level={ this.haste }></ms-haste>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.MesoguardPlus, this.editable,
          <ms-mesoguard-plus level={ this.mesoguardPlus }></ms-mesoguard-plus>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.MindBreaker, this.editable,
          <ms-mind-breaker level={ this.mindBreaker }></ms-mind-breaker>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.MindStealer, this.editable,
          <ms-mind-stealer level={ this.mindStealer }></ms-mind-stealer>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.PoisonEdge, this.editable,
          <ms-poison-edge level={ this.poisonEdge }></ms-poison-edge>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.PoisonVial, this.editable,
          <ms-poison-vial level={ this.poisonVial }></ms-poison-vial>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.QuickStep, this.editable,
          <ms-quick-step level={ this.quickStep }></ms-quick-step>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.Retaliation, this.editable,
          <ms-retaliation level={ this.retaliation }></ms-retaliation>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.RuthlessGuile, this.editable,
          <ms-ruthless-guile level={ this.ruthlessGuile }></ms-ruthless-guile>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.SomersaultKick, this.editable,
          <ms-somersault-kick level={ this.somersaultKick }></ms-somersault-kick>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.SpiritThief, this.editable,
          <ms-spirit-thief level={ this.spiritThief }></ms-spirit-thief>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.SurpriseAttack, this.editable,
          <ms-surprise-attack level={ this.surpriseAttack }></ms-surprise-attack>
        )}
        { renderLevelControls(this, ThiefSkills, ThiefSkills.ViciousCuts, this.editable,
          <ms-vicious-cuts level={ this.viciousCuts }></ms-vicious-cuts>
        )}
      </ms-chart>
    );
  }
}
