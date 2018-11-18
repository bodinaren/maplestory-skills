import { Component, Prop } from "@stencil/core";
import * as ArcherValues from "../../../global/values/archer";

@Component({
  tag: "ms-archer",
  styleUrls: ["../charts.scss", "archer.scss"],
  assetsDir: "assets",
  shadow: true
})
export class ArcherComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

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

  render() {
    return (
      <div class="chart archer" style={{ backgroundImage: `url(${ this.publicPath }assets/archer.jpg)` }}>
        <ms-agile-archer level={ this.agileArcher }></ms-agile-archer>
        <ms-arrow-barrage level={ this.arrowBarrage }></ms-arrow-barrage>
        <ms-arrow-storm level={ this.arrowStorm }></ms-arrow-storm>
        <ms-arrow-stream level={ this.arrowStream }></ms-arrow-stream>
        <ms-bow-swing level={ this.bowSwing }></ms-bow-swing>
        <ms-bronze-eagle level={ this.bronzeEagle }></ms-bronze-eagle>
        <ms-conditioning level={ this.conditioning }></ms-conditioning>
        <ms-eagle-claw level={ this.eagleClaw }></ms-eagle-claw>
        <ms-eagle-glide level={ this.eagleGlide }></ms-eagle-glide>
        <ms-eagles-majesty level={ this.eaglesMajesty }></ms-eagles-majesty>
        <ms-evasive-salvo level={ this.evasiveSalvo }></ms-evasive-salvo>
        <ms-ice-arrow level={ this.iceArrow }></ms-ice-arrow>
        <ms-precision-shooter level={ this.precisionShooter }></ms-precision-shooter>
        <ms-rapid-shot level={ this.rapidShot }></ms-rapid-shot>
        <ms-screwdriver-shot level={ this.screwdriverShot }></ms-screwdriver-shot>
        <ms-sharp-eyes level={ this.sharpEyes }></ms-sharp-eyes>
        <ms-snipe level={ this.snipe }></ms-snipe>
      </div>
    );
  }
}
