import { Component, Prop, State, Event, EventEmitter, Method } from "@stencil/core";
import { processSkills, renderLevelControls, renderProperties, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
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

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, ThiefSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, ThiefSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, ThiefSkills));
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-thief ${ renderProperties(this, ThiefSkills) }></ms-thief>`);
  }

  render() {
    return (
      <ms-chart msClass="thief">
        { renderLevelControls(this, ThiefSkills.BladeDance, this.editable,
          <ms-blade-dance level={ this.bladeDance }></ms-blade-dance>
        )}
        { renderLevelControls(this, ThiefSkills.CunningTactics, this.editable,
          <ms-cunning-tactics level={ this.cunningTactics }></ms-cunning-tactics>
        )}
        { renderLevelControls(this, ThiefSkills.DeftCombatant, this.editable,
          <ms-deft-combatant level={ this.deftCombatant }></ms-deft-combatant>
        )}
        { renderLevelControls(this, ThiefSkills.DoubleSlash, this.editable,
          <ms-double-slash level={ this.doubleSlash }></ms-double-slash>
        )}
        { renderLevelControls(this, ThiefSkills.Haste, this.editable,
          <ms-haste level={ this.haste }></ms-haste>
        )}
        { renderLevelControls(this, ThiefSkills.MesoguardPlus, this.editable,
          <ms-mesoguard-plus level={ this.mesoguardPlus }></ms-mesoguard-plus>
        )}
        { renderLevelControls(this, ThiefSkills.MindBreaker, this.editable,
          <ms-mind-breaker level={ this.mindBreaker }></ms-mind-breaker>
        )}
        { renderLevelControls(this, ThiefSkills.MindStealer, this.editable,
          <ms-mind-stealer level={ this.mindStealer }></ms-mind-stealer>
        )}
        { renderLevelControls(this, ThiefSkills.PoisonEdge, this.editable,
          <ms-poison-edge level={ this.poisonEdge }></ms-poison-edge>
        )}
        { renderLevelControls(this, ThiefSkills.PoisonVial, this.editable,
          <ms-poison-vial level={ this.poisonVial }></ms-poison-vial>
        )}
        { renderLevelControls(this, ThiefSkills.QuickStep, this.editable,
          <ms-quick-step level={ this.quickStep }></ms-quick-step>
        )}
        { renderLevelControls(this, ThiefSkills.Retaliation, this.editable,
          <ms-retaliation level={ this.retaliation }></ms-retaliation>
        )}
        { renderLevelControls(this, ThiefSkills.RuthlessGuile, this.editable,
          <ms-ruthless-guile level={ this.ruthlessGuile }></ms-ruthless-guile>
        )}
        { renderLevelControls(this, ThiefSkills.SomersaultKick, this.editable,
          <ms-somersault-kick level={ this.somersaultKick }></ms-somersault-kick>
        )}
        { renderLevelControls(this, ThiefSkills.SpiritThief, this.editable,
          <ms-spirit-thief level={ this.spiritThief }></ms-spirit-thief>
        )}
        { renderLevelControls(this, ThiefSkills.SurpriseAttack, this.editable,
          <ms-surprise-attack level={ this.surpriseAttack }></ms-surprise-attack>
        )}
        { renderLevelControls(this, ThiefSkills.ViciousCuts, this.editable,
          <ms-vicious-cuts level={ this.viciousCuts }></ms-vicious-cuts>
        )}
      </ms-chart>
    );
  }
}
