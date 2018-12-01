import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
import { processSkills, renderLevelControls, toSkillChangeObject } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
import * as KnightSkills from "../../../global/values/knight";

@Component({
  tag: "ms-knight",
  styleUrls: ["knight.scss"],
  shadow: true
})
export class KnightComponent {

  @Prop({ reflectToAttr: true }) editable: boolean = false;

  @Prop({ mutable: true }) bulwark: number = KnightSkills.Bulwark.minLevel;
  @Prop({ mutable: true }) crossCut: number = KnightSkills.CrossCut.minLevel;
  @Prop({ mutable: true }) defenderOfTheFaith: number = KnightSkills.DefenderOfTheFaith.minLevel;
  @Prop({ mutable: true }) divineStrike: number = KnightSkills.DivineStrike.minLevel;
  @Prop({ mutable: true }) drillThrust: number = KnightSkills.DrillThrust.minLevel;
  @Prop({ mutable: true }) ironDefense: number = KnightSkills.IronDefense.minLevel;
  @Prop({ mutable: true }) ironShield: number = KnightSkills.IronShield.minLevel;
  @Prop({ mutable: true }) longswordMastery: number = KnightSkills.LongswordMastery.minLevel;
  @Prop({ mutable: true }) shieldBooster: number = KnightSkills.ShieldBooster.minLevel;
  @Prop({ mutable: true }) shieldCharge: number = KnightSkills.ShieldCharge.minLevel;
  @Prop({ mutable: true }) shieldMastery: number = KnightSkills.ShieldMastery.minLevel;
  @Prop({ mutable: true }) shieldToss: number = KnightSkills.ShieldToss.minLevel;
  @Prop({ mutable: true }) shieldWall: number = KnightSkills.ShieldWall.minLevel;
  @Prop({ mutable: true }) stingingFlurry: number = KnightSkills.StingingFlurry.minLevel;
  @Prop({ mutable: true }) tornadoSlash: number = KnightSkills.TornadoSlash.minLevel;
  @Prop({ mutable: true }) typhoonSlash: number = KnightSkills.TyphoonSlash.minLevel;
  @Prop({ mutable: true }) warhorn: number = KnightSkills.Warhorn.minLevel;

  @State() skills: { [prop: string]: { locked: boolean, required: string, active: boolean } };

  @Event({ eventName: "skillchanged"}) onSkillChanged: EventEmitter;

  componentWillLoad() {
    processSkills(this, KnightSkills);
  }

  async levelChanged(skill: ISkill, level: number) {
    this[skill.prop] = level;

    processSkills(this, KnightSkills);

    this.onSkillChanged.emit(toSkillChangeObject(this, KnightSkills));
  }

  render() {
    return (
      <ms-chart msClass="knight">
        { renderLevelControls(this, KnightSkills.Bulwark, this.editable,
          <ms-bulwark level={ this.bulwark }></ms-bulwark>
        )}
        { renderLevelControls(this, KnightSkills.CrossCut, this.editable,
          <ms-cross-cut level={ this.crossCut }></ms-cross-cut>
        )}
        { renderLevelControls(this, KnightSkills.DefenderOfTheFaith, this.editable,
          <ms-defender-of-the-faith level={ this.defenderOfTheFaith }></ms-defender-of-the-faith>
        )}
        { renderLevelControls(this, KnightSkills.DivineStrike, this.editable,
          <ms-divine-strike level={ this.divineStrike }></ms-divine-strike>
        )}
        { renderLevelControls(this, KnightSkills.DrillThrust, this.editable,
          <ms-drill-thrust level={ this.drillThrust }></ms-drill-thrust>
        )}
        { renderLevelControls(this, KnightSkills.IronDefense, this.editable,
          <ms-iron-defense level={ this.ironDefense }></ms-iron-defense>
        )}
        { renderLevelControls(this, KnightSkills.IronShield, this.editable,
          <ms-iron-shield level={ this.ironShield }></ms-iron-shield>
        )}
        { renderLevelControls(this, KnightSkills.LongswordMastery, this.editable,
          <ms-longsword-mastery level={ this.longswordMastery }></ms-longsword-mastery>
        )}
        { renderLevelControls(this, KnightSkills.ShieldBooster, this.editable,
          <ms-shield-booster level={ this.shieldBooster }></ms-shield-booster>
        )}
        { renderLevelControls(this, KnightSkills.ShieldCharge, this.editable,
          <ms-shield-charge level={ this.shieldCharge }></ms-shield-charge>
        )}
        { renderLevelControls(this, KnightSkills.ShieldMastery, this.editable,
          <ms-shield-mastery level={ this.shieldMastery }></ms-shield-mastery>
        )}
        { renderLevelControls(this, KnightSkills.ShieldToss, this.editable,
          <ms-shield-toss level={ this.shieldToss }></ms-shield-toss>
        )}
        { renderLevelControls(this, KnightSkills.ShieldWall, this.editable,
          <ms-shield-wall level={ this.shieldWall }></ms-shield-wall>
        )}
        { renderLevelControls(this, KnightSkills.StingingFlurry, this.editable,
          <ms-stinging-flurry level={ this.stingingFlurry }></ms-stinging-flurry>
        )}
        { renderLevelControls(this, KnightSkills.TornadoSlash, this.editable,
          <ms-tornado-slash level={ this.tornadoSlash }></ms-tornado-slash>
        )}
        { renderLevelControls(this, KnightSkills.TyphoonSlash, this.editable,
          <ms-typhoon-slash level={ this.typhoonSlash }></ms-typhoon-slash>
        )}
        { renderLevelControls(this, KnightSkills.Warhorn, this.editable,
          <ms-warhorn level={ this.warhorn }></ms-warhorn>
        )}
      </ms-chart>
    );
  }
}
