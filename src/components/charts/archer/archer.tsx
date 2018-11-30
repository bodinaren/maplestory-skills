import { Component, Prop, State } from "@stencil/core";
import { processSkills, renderLevelControls } from "../class-chart-helpers";
import * as ArcherValues from "../../../global/values/archer";

@Component({
  tag: "ms-archer",
  styleUrls: ["archer.scss"],
  shadow: true
})
export class ArcherComponent {

  @Prop() editable: boolean = false;

  @Prop({ mutable: true }) agileArcher: number = ArcherValues.AgileArcherValues.minLevel;
  @Prop({ mutable: true }) arrowBarrage: number = ArcherValues.ArrowBarrageValues.minLevel;
  @Prop({ mutable: true }) arrowStorm: number = ArcherValues.ArrowStormValues.minLevel;
  @Prop({ mutable: true }) arrowStream: number = ArcherValues.ArrowStreamValues.minLevel;
  @Prop({ mutable: true }) bowSwing: number = ArcherValues.BowSwingValues.minLevel;
  @Prop({ mutable: true }) bronzeEagle: number = ArcherValues.BronzeEagleValues.minLevel;
  @Prop({ mutable: true }) conditioning: number = ArcherValues.ConditioningValues.minLevel;
  @Prop({ mutable: true }) eagleClaw: number = ArcherValues.EagleClawValues.minLevel;
  @Prop({ mutable: true }) eagleGlide: number = ArcherValues.EagleGlideValues.minLevel;
  @Prop({ mutable: true }) eaglesMajesty: number = ArcherValues.EaglesMajestyValues.minLevel;
  @Prop({ mutable: true }) evasiveSalvo: number = ArcherValues.EvasiveSalvoValues.minLevel;
  @Prop({ mutable: true }) iceArrow: number = ArcherValues.IceArrowValues.minLevel;
  @Prop({ mutable: true }) precisionShooter: number = ArcherValues.PrecisionShooterValues.minLevel;
  @Prop({ mutable: true }) rapidShot: number = ArcherValues.RapidShotValues.minLevel;
  @Prop({ mutable: true }) screwdriverShot: number = ArcherValues.ScrewdriverShotValues.minLevel;
  @Prop({ mutable: true }) sharpEyes: number = ArcherValues.SharpEyesValues.minLevel;
  @Prop({ mutable: true }) snipe: number = ArcherValues.SnipeValues.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  componentWillLoad() {
    processSkills(this, ArcherValues);
  }

  render() {
    return [
      <ms-chart msClass="archer">
        { renderLevelControls(this, ArcherValues, ArcherValues.AgileArcherValues, this.editable,
          <ms-agile-archer level={ this.agileArcher }></ms-agile-archer>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.ArrowBarrageValues, this.editable,
          <ms-arrow-barrage level={ this.arrowBarrage }></ms-arrow-barrage>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.ArrowStormValues, this.editable,
          <ms-arrow-storm level={ this.arrowStorm }></ms-arrow-storm>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.ArrowStreamValues, this.editable,
          <ms-arrow-stream level={ this.arrowStream }></ms-arrow-stream>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.BowSwingValues, this.editable,
          <ms-bow-swing level={ this.bowSwing }></ms-bow-swing>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.BronzeEagleValues, this.editable,
          <ms-bronze-eagle level={ this.bronzeEagle }></ms-bronze-eagle>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.ConditioningValues, this.editable,
          <ms-conditioning level={ this.conditioning }></ms-conditioning>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.EagleClawValues, this.editable,
          <ms-eagle-claw level={ this.eagleClaw }></ms-eagle-claw>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.EagleGlideValues, this.editable,
          <ms-eagle-glide level={ this.eagleGlide }></ms-eagle-glide>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.EaglesMajestyValues, this.editable,
          <ms-eagles-majesty level={ this.eaglesMajesty }></ms-eagles-majesty>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.EvasiveSalvoValues, this.editable,
          <ms-evasive-salvo level={ this.evasiveSalvo }></ms-evasive-salvo>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.IceArrowValues, this.editable,
          <ms-ice-arrow level={ this.iceArrow }></ms-ice-arrow>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.PrecisionShooterValues, this.editable,
          <ms-precision-shooter level={ this.precisionShooter }></ms-precision-shooter>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.RapidShotValues, this.editable,
          <ms-rapid-shot level={ this.rapidShot }></ms-rapid-shot>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.ScrewdriverShotValues, this.editable,
          <ms-screwdriver-shot level={ this.screwdriverShot }></ms-screwdriver-shot>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.SharpEyesValues, this.editable,
          <ms-sharp-eyes level={ this.sharpEyes }></ms-sharp-eyes>
        )}
        { renderLevelControls(this, ArcherValues, ArcherValues.SnipeValues, this.editable,
          <ms-snipe level={ this.snipe }></ms-snipe>
        )}
      </ms-chart>
    ];
  }

}
