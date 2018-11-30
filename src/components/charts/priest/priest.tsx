import { Component, Prop, State, Event, EventEmitter, Method } from "@stencil/core";
import { processSkills, renderLevelControls, renderProperties } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as PriestSkills from "../../../global/values/priest";

@Component({
  tag: "ms-priest",
  styleUrls: ["priest.scss"],
  shadow: true
})
export class PriestComponent {

  @Prop() editable: boolean = false;

  @Prop({ mutable: true }) heavenlyWings: number = PriestSkills.HeavenlyWings.minLevel;
  @Prop({ mutable: true }) steadfastFaith: number = PriestSkills.SteadfastFaith.minLevel;
  @Prop({ mutable: true }) celestialLight: number = PriestSkills.CelestialLight.minLevel;
  @Prop({ mutable: true }) holyBlast: number = PriestSkills.HolyBlast.minLevel;
  @Prop({ mutable: true }) healingPrayer: number = PriestSkills.HealingPrayer.minLevel;
  @Prop({ mutable: true }) scepterMastery: number = PriestSkills.ScepterMastery.minLevel;
  @Prop({ mutable: true }) celestialGuardian: number = PriestSkills.CelestialGuardian.minLevel;
  @Prop({ mutable: true }) shieldOfTheArchon: number = PriestSkills.ShieldOfTheArchon.minLevel;
  @Prop({ mutable: true }) scourgingWave: number = PriestSkills.ScourgingWave.minLevel;
  @Prop({ mutable: true }) celestialBlessings: number = PriestSkills.CelestialBlessings.minLevel;
  @Prop({ mutable: true }) holyRelic: number = PriestSkills.HolyRelic.minLevel;
  @Prop({ mutable: true }) sanctuary: number = PriestSkills.Sanctuary.minLevel;
  @Prop({ mutable: true }) holySymbol: number = PriestSkills.HolySymbol.minLevel;
  @Prop({ mutable: true }) healingMastery: number = PriestSkills.HealingMastery.minLevel;
  @Prop({ mutable: true }) smitingAura: number = PriestSkills.SmitingAura.minLevel;
  @Prop({ mutable: true }) disciple: number = PriestSkills.Disciple.minLevel;
  @Prop({ mutable: true }) angelicRay: number = PriestSkills.AngelicRay.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter<string>;

  componentWillLoad() {
    processSkills(this, PriestSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    this.onSkillChanged.emit(await this.toHtmlString());

    processSkills(this, PriestSkills);
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(`<ms-priest ${ renderProperties(this, PriestSkills) }></ms-priest>`);
  }

  render() {
    return (
      <ms-chart msClass="priest">
        { renderLevelControls(this, PriestSkills.HeavenlyWings, this.editable,
          <ms-heavenly-wings level={ this.heavenlyWings }></ms-heavenly-wings>
        )}
        { renderLevelControls(this, PriestSkills.SteadfastFaith, this.editable,
          <ms-steadfast-faith level={ this.steadfastFaith }></ms-steadfast-faith>
        )}
        { renderLevelControls(this, PriestSkills.CelestialLight, this.editable,
          <ms-celestial-light level={ this.celestialLight }></ms-celestial-light>
        )}
        { renderLevelControls(this, PriestSkills.HolyBlast, this.editable,
          <ms-holy-blast level={ this.holyBlast }></ms-holy-blast>
        )}
        { renderLevelControls(this, PriestSkills.HealingPrayer, this.editable,
          <ms-healing-prayer level={ this.healingPrayer }></ms-healing-prayer>
        )}
        { renderLevelControls(this, PriestSkills.ScepterMastery, this.editable,
          <ms-scepter-mastery level={ this.scepterMastery }></ms-scepter-mastery>
        )}
        { renderLevelControls(this, PriestSkills.CelestialGuardian, this.editable,
          <ms-celestial-guardian level={ this.celestialGuardian }></ms-celestial-guardian>
        )}
        { renderLevelControls(this, PriestSkills.ShieldOfTheArchon, this.editable,
          <ms-shield-of-the-archon level={ this.shieldOfTheArchon }></ms-shield-of-the-archon>
        )}
        { renderLevelControls(this, PriestSkills.ScourgingWave, this.editable,
          <ms-scourging-wave level={ this.scourgingWave }></ms-scourging-wave>
        )}
        { renderLevelControls(this, PriestSkills.CelestialBlessings, this.editable,
          <ms-celestial-blessings level={ this.celestialBlessings }></ms-celestial-blessings>
        )}
        { renderLevelControls(this, PriestSkills.HolyRelic, this.editable,
          <ms-holy-relic level={ this.holyRelic }></ms-holy-relic>
        )}
        { renderLevelControls(this, PriestSkills.Sanctuary, this.editable,
          <ms-sanctuary level={ this.sanctuary }></ms-sanctuary>
        )}
        { renderLevelControls(this, PriestSkills.HolySymbol, this.editable,
          <ms-holy-symbol level={ this.holySymbol }></ms-holy-symbol>
        )}
        { renderLevelControls(this, PriestSkills.HealingMastery, this.editable,
          <ms-healing-mastery level={ this.healingMastery }></ms-healing-mastery>
        )}
        { renderLevelControls(this, PriestSkills.SmitingAura, this.editable,
          <ms-smiting-aura level={ this.smitingAura }></ms-smiting-aura>
        )}
        { renderLevelControls(this, PriestSkills.Disciple, this.editable,
          <ms-disciple level={ this.disciple }></ms-disciple>
        )}
        { renderLevelControls(this, PriestSkills.AngelicRay, this.editable,
          <ms-angelic-ray level={ this.angelicRay }></ms-angelic-ray>
        )}
      </ms-chart>
    );
  }
}
