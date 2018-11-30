import { Component, Prop, State } from "@stencil/core";
import { processSkills, renderLevelControls } from "../class-chart-helpers";
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

  componentWillLoad() {
    processSkills(this, ArcherSkills);
  }

  render() {
    return [
      <ms-chart msClass="archer">
        { renderLevelControls(this, ArcherSkills, ArcherSkills.AgileArcher, this.editable,
          <ms-agile-archer level={ this.agileArcher }></ms-agile-archer>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.ArrowBarrage, this.editable,
          <ms-arrow-barrage level={ this.arrowBarrage }></ms-arrow-barrage>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.ArrowStorm, this.editable,
          <ms-arrow-storm level={ this.arrowStorm }></ms-arrow-storm>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.ArrowStream, this.editable,
          <ms-arrow-stream level={ this.arrowStream }></ms-arrow-stream>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.BowSwing, this.editable,
          <ms-bow-swing level={ this.bowSwing }></ms-bow-swing>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.BronzeEagle, this.editable,
          <ms-bronze-eagle level={ this.bronzeEagle }></ms-bronze-eagle>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.Conditioning, this.editable,
          <ms-conditioning level={ this.conditioning }></ms-conditioning>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.EagleClaw, this.editable,
          <ms-eagle-claw level={ this.eagleClaw }></ms-eagle-claw>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.EagleGlide, this.editable,
          <ms-eagle-glide level={ this.eagleGlide }></ms-eagle-glide>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.EaglesMajesty, this.editable,
          <ms-eagles-majesty level={ this.eaglesMajesty }></ms-eagles-majesty>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.EvasiveSalvo, this.editable,
          <ms-evasive-salvo level={ this.evasiveSalvo }></ms-evasive-salvo>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.IceArrow, this.editable,
          <ms-ice-arrow level={ this.iceArrow }></ms-ice-arrow>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.PrecisionShooter, this.editable,
          <ms-precision-shooter level={ this.precisionShooter }></ms-precision-shooter>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.RapidShot, this.editable,
          <ms-rapid-shot level={ this.rapidShot }></ms-rapid-shot>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.ScrewdriverShot, this.editable,
          <ms-screwdriver-shot level={ this.screwdriverShot }></ms-screwdriver-shot>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.SharpEyes, this.editable,
          <ms-sharp-eyes level={ this.sharpEyes }></ms-sharp-eyes>
        )}
        { renderLevelControls(this, ArcherSkills, ArcherSkills.Snipe, this.editable,
          <ms-snipe level={ this.snipe }></ms-snipe>
        )}
      </ms-chart>
    ];
  }

}
