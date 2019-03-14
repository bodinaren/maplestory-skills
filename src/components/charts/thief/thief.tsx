import { Component, Prop, State, Event, EventEmitter, Method, Watch } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as ThiefSkills from "../../../global/values/thief";

@Component({
  tag: "ms-thief",
  styleUrls: ["thief.css"],
  shadow: true
})
export class ThiefComponent implements IChart {

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop() extras: boolean = false;

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

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, ThiefSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, ThiefSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, ThiefSkills, skill);

    this.emitChangeEvent();
  }

  @Watch("extras")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, ThiefSkills));
  }

  render() {
    return (
      <ms-chart msClass="thief">
        { renderLevelControls(this, ThiefSkills, this.editable, this.extras) }
      </ms-chart>
    );
  }
}
