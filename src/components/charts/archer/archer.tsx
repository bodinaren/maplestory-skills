import { Component, Prop, State, Event, EventEmitter, Method } from "@stencil/core";
import { processSkills, renderLevelControls, renderProperties } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as ArcherSkills from "../../../global/values/archer";

@Component({
  tag: "ms-archer",
  styleUrls: ["archer.scss"],
  shadow: true
})
export class ArcherComponent {

  @Prop() editable: boolean = false;

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

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  componentWillLoad() {
    processSkills(this, ArcherSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    this.onSkillChanged.emit(await this.toHtmlString());

    processSkills(this, ArcherSkills);
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-archer ${ renderProperties(this, ArcherSkills) }></ms-archer>`);
  }

  render() {
    return [
      <ms-chart msClass="archer">
        { renderLevelControls(this, ArcherSkills.AgileArcher, this.editable,
          <ms-agile-archer level={ this.agileArcher }></ms-agile-archer>
        )}
        { renderLevelControls(this, ArcherSkills.ArrowBarrage, this.editable,
          <ms-arrow-barrage level={ this.arrowBarrage }></ms-arrow-barrage>
        )}
        { renderLevelControls(this, ArcherSkills.ArrowStorm, this.editable,
          <ms-arrow-storm level={ this.arrowStorm }></ms-arrow-storm>
        )}
        { renderLevelControls(this, ArcherSkills.ArrowStream, this.editable,
          <ms-arrow-stream level={ this.arrowStream }></ms-arrow-stream>
        )}
        { renderLevelControls(this, ArcherSkills.BowSwing, this.editable,
          <ms-bow-swing level={ this.bowSwing }></ms-bow-swing>
        )}
        { renderLevelControls(this, ArcherSkills.BronzeEagle, this.editable,
          <ms-bronze-eagle level={ this.bronzeEagle }></ms-bronze-eagle>
        )}
        { renderLevelControls(this, ArcherSkills.Conditioning, this.editable,
          <ms-conditioning level={ this.conditioning }></ms-conditioning>
        )}
        { renderLevelControls(this, ArcherSkills.EagleClaw, this.editable,
          <ms-eagle-claw level={ this.eagleClaw }></ms-eagle-claw>
        )}
        { renderLevelControls(this, ArcherSkills.EagleGlide, this.editable,
          <ms-eagle-glide level={ this.eagleGlide }></ms-eagle-glide>
        )}
        { renderLevelControls(this, ArcherSkills.EaglesMajesty, this.editable,
          <ms-eagles-majesty level={ this.eaglesMajesty }></ms-eagles-majesty>
        )}
        { renderLevelControls(this, ArcherSkills.EvasiveSalvo, this.editable,
          <ms-evasive-salvo level={ this.evasiveSalvo }></ms-evasive-salvo>
        )}
        { renderLevelControls(this, ArcherSkills.IceArrow, this.editable,
          <ms-ice-arrow level={ this.iceArrow }></ms-ice-arrow>
        )}
        { renderLevelControls(this, ArcherSkills.PrecisionShooter, this.editable,
          <ms-precision-shooter level={ this.precisionShooter }></ms-precision-shooter>
        )}
        { renderLevelControls(this, ArcherSkills.RapidShot, this.editable,
          <ms-rapid-shot level={ this.rapidShot }></ms-rapid-shot>
        )}
        { renderLevelControls(this, ArcherSkills.ScrewdriverShot, this.editable,
          <ms-screwdriver-shot level={ this.screwdriverShot }></ms-screwdriver-shot>
        )}
        { renderLevelControls(this, ArcherSkills.SharpEyes, this.editable,
          <ms-sharp-eyes level={ this.sharpEyes }></ms-sharp-eyes>
        )}
        { renderLevelControls(this, ArcherSkills.Snipe, this.editable,
          <ms-snipe level={ this.snipe }></ms-snipe>
        )}
      </ms-chart>
    ];
  }

}
