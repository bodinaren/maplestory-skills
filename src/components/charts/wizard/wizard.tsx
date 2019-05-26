import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { WizardSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/wizard";

@Component({
  tag: "ms-wizard",
  styleUrls: ["wizard.css"],
  shadow: true
})
export class WizardComponent implements IChart {

  @Element() host: HTMLMsWizardElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;
  @Prop() ignoreMax: boolean = false;

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

  @Prop({ mutable: true }) manaControl: number = WizardSkills.ManaControl.minLevel;
  @Prop({ mutable: true }) dualCast: number = WizardSkills.DualCast.minLevel;
  @Prop({ mutable: true }) iceCreamTime: number = WizardSkills.IceCreamTime.minLevel;
  @Prop({ mutable: true }) lodestoneField: number = WizardSkills.LodestoneField.minLevel;
  @Prop({ mutable: true }) perfectStorm: number = WizardSkills.PerfectStorm.minLevel;
  @Prop({ mutable: true }) ember: number = WizardSkills.Ember.minLevel;
  @Prop({ mutable: true }) barbecueParty: number = WizardSkills.BarbecueParty.minLevel;
  @Prop({ mutable: true }) playingWithFire: number = WizardSkills.PlayingWithFire.minLevel;
  @Prop({ mutable: true }) littleMeteor: number = WizardSkills.LittleMeteor.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, WizardSkills, this.ignoreMax);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, WizardSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, WizardSkills, this.ignoreMax, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("ignoreMax")
  ignoreMaxChanged(): void {
    processSkills(this, WizardSkills, this.ignoreMax);
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, WizardSkills));
  }

  render() {
    return (
      <ms-chart msClass="wizard" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
        { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
        { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
      </ms-chart>
    );
  }
}
