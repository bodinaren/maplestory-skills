import { Component, Prop, Element } from "@stencil/core";
import * as PriestValues from "../../../global/values/priest";

@Component({
  tag: "ms-priest",
  styleUrls: ["../charts.scss", "priest.scss"],
  assetsDir: "assets",
  shadow: true
})
export class PriestComponent {

  @Element() private host: HTMLStencilElement;
  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop({ mutable: true }) heavenlyWings: number = PriestValues.HeavenlyWingsValues.minLevel;
  @Prop({ mutable: true }) steadfastFaith: number = PriestValues.SteadfastFaithValues.minLevel;
  @Prop({ mutable: true }) celestialLight: number = PriestValues.CelestialLightValues.minLevel;
  @Prop({ mutable: true }) holyBlast: number = PriestValues.HolyBlastValues.minLevel;
  @Prop({ mutable: true }) healingPrayer: number = PriestValues.HealingPrayerValues.minLevel;
  @Prop({ mutable: true }) scepterMastery: number = PriestValues.ScepterMasteryValues.minLevel;
  @Prop({ mutable: true }) celestialGuardian: number = PriestValues.CelestialGuardianValues.minLevel;
  @Prop({ mutable: true }) shieldOfTheArchon: number = PriestValues.ShieldOfTheArchonValues.minLevel;
  @Prop({ mutable: true }) scourgingWave: number = PriestValues.ScourgingWaveValues.minLevel;
  @Prop({ mutable: true }) celestialBlessings: number = PriestValues.CelestialBlessingsValues.minLevel;
  @Prop({ mutable: true }) holyRelic: number = PriestValues.HolyRelicValues.minLevel;
  @Prop({ mutable: true }) sanctuary: number = PriestValues.SanctuaryValues.minLevel;
  @Prop({ mutable: true }) holySymbol: number = PriestValues.HolySymbolValues.minLevel;
  @Prop({ mutable: true }) healingMastery: number = PriestValues.HealingMasteryValues.minLevel;
  @Prop({ mutable: true }) smitingAura: number = PriestValues.SmitingAuraValues.minLevel;
  @Prop({ mutable: true }) disciple: number = PriestValues.DiscipleValues.minLevel;
  @Prop({ mutable: true }) angelicRay: number = PriestValues.AngelicRayValues.minLevel;

  componentWillLoad() {
    this.host.style.setProperty("--priest-image-url", `url(${ this.publicPath }assets/priest.jpg)`);
  }

  render() {
    return (
      <div class="chart priest">
        <ms-heavenly-wings level={ this.heavenlyWings }></ms-heavenly-wings>
        <ms-steadfast-faith level={ this.steadfastFaith }></ms-steadfast-faith>
        <ms-celestial-light level={ this.celestialLight }></ms-celestial-light>
        <ms-holy-blast level={ this.holyBlast }></ms-holy-blast>
        <ms-healing-prayer level={ this.healingPrayer }></ms-healing-prayer>
        <ms-healing-prayer level={ this.healingPrayer }></ms-healing-prayer>
        <ms-scepter-mastery level={ this.scepterMastery }></ms-scepter-mastery>
        <ms-celestial-guardian level={ this.celestialGuardian }></ms-celestial-guardian>
        <ms-shield-of-the-archon level={ this.shieldOfTheArchon }></ms-shield-of-the-archon>
        <ms-scourging-wave level={ this.scourgingWave }></ms-scourging-wave>
        <ms-celestial-blessings level={ this.celestialBlessings }></ms-celestial-blessings>
        <ms-holy-relic level={ this.holyRelic }></ms-holy-relic>
        <ms-sanctuary level={ this.sanctuary }></ms-sanctuary>
        <ms-holy-symbol level={ this.holySymbol }></ms-holy-symbol>
        <ms-healing-mastery level={ this.healingMastery }></ms-healing-mastery>
        <ms-smiting-aura level={ this.smitingAura }></ms-smiting-aura>
        <ms-disciple level={ this.disciple }></ms-disciple>
        <ms-angelic-ray level={ this.angelicRay }></ms-angelic-ray>
      </div>
    );
  }
}
