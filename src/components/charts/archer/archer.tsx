import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as ArcherSkills from "../../../global/values/archer";

@Component({
  tag: "ms-archer",
  styleUrls: ["archer.css"],
  shadow: true
})
export class ArcherComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

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

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, ArcherSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, ArcherSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, ArcherSkills));
  }

  render() {
    return [
      <ms-chart msClass="archer">
        { renderLevelControls(this, ArcherSkills, this.editable)}
      </ms-chart>
    ];
  }
}
