import { h, Component, Prop, State, Event, EventEmitter, Method, Watch, Element } from "@stencil/core";
import { IChart, IChartSkills, processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import { ISkill, Rank } from "../../../global/values/_skillValues.interfaces";
import { ArcherSkills, RankOneSkills, RankTwoSkills } from "../../../global/values/archer";

@Component({
  tag: "ms-archer",
  styleUrls: ["archer.css"],
  shadow: true
})
export class ArcherComponent implements IChart {

  @Element() host: HTMLMsArcherElement;

  @Prop({ reflectToAttr: true }) editable: boolean = false;
  @Prop({ reflectToAttr: true, mutable: true }) rank: number = Rank.Basic;
  @Prop() extras: boolean = false;

  @Prop({ mutable: true }) agileArcher: number = ArcherSkills.AgileArcher.minLevel;
  @Prop({ mutable: true }) arrowBarrage: number = ArcherSkills.ArrowBarrage.minLevel;
  @Prop({ mutable: true }) arrowStorm: number = ArcherSkills.ArrowStorm.minLevel;
  @Prop({ mutable: true }) arrowStream: number = ArcherSkills.ArrowStream.minLevel;
  @Prop({ mutable: true }) bowSwing: number = ArcherSkills.BowSwing.minLevel;
  @Prop({ mutable: true }) bronzeEagle: number = ArcherSkills.BronzeEagle.minLevel;
  @Prop({ mutable: true }) conditioning: number = ArcherSkills.Conditioning.minLevel;
  @Prop({ mutable: true }) eagleClaw: number = ArcherSkills.EagleClaw.minLevel;
  @Prop({ mutable: true }) eagleGlide: number = ArcherSkills.EagleGlide.minLevel;
  @Prop({ mutable: true }) eaglesMajesty: number = ArcherSkills.EaglesMajesty.minLevel;
  @Prop({ mutable: true }) evasiveSalvo: number = ArcherSkills.EvasiveSalvo.minLevel;
  @Prop({ mutable: true }) iceArrow: number = ArcherSkills.IceArrow.minLevel;
  @Prop({ mutable: true }) precisionShooter: number = ArcherSkills.PrecisionShooter.minLevel;
  @Prop({ mutable: true }) rapidShot: number = ArcherSkills.RapidShot.minLevel;
  @Prop({ mutable: true }) screwdriverShot: number = ArcherSkills.ScrewdriverShot.minLevel;
  @Prop({ mutable: true }) sharpEyes: number = ArcherSkills.SharpEyes.minLevel;
  @Prop({ mutable: true }) snipe: number = ArcherSkills.Snipe.minLevel;

  @Prop({ mutable: true }) improvedGliding: number = ArcherSkills.ImprovedGliding.minLevel;
  @Prop({ mutable: true }) flameArrow: number = ArcherSkills.FlameArrow.minLevel;
  @Prop({ mutable: true }) multiDriveShot: number = ArcherSkills.MultiDriveShot.minLevel;
  @Prop({ mutable: true }) rangersFocus: number = ArcherSkills.RangersFocus.minLevel;
  @Prop({ mutable: true }) hastersTeachings: number = ArcherSkills.HastersTeachings.minLevel;
  @Prop({ mutable: true }) piercingArrow: number = ArcherSkills.PiercingArrow.minLevel;
  @Prop({ mutable: true }) spiralArrow: number = ArcherSkills.SpiralArrow.minLevel;
  @Prop({ mutable: true }) archersSecrets: number = ArcherSkills.ArchersSecrets.minLevel;
  @Prop({ mutable: true }) greaterSharpEyes: number = ArcherSkills.GreaterSharpEyes.minLevel;

  @State() skills: IChartSkills;

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, ArcherSkills);
  }

  @Method()
  async getData() {
    return toSkillChangeEventObject(this, ArcherSkills);
  }

  levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, ArcherSkills, skill);
    this.host.forceUpdate();

    this.emitChangeEvent();
  }

  @Watch("extras")
  @Watch("rank")
  emitChangeEvent(): void {
    this.onSkillChanged.emit(toSkillChangeEventObject(this, ArcherSkills));
  }

  render() {
    return [
      <ms-chart msClass="archer" rank={ this.rank } onRankChange={ ({ detail }) => this.rank = detail }>
      { renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic) }
      { renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening) }
    </ms-chart>
    ];
  }
}
