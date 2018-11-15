import { Component, Prop } from "@stencil/core";
import { DiscipleValues } from "../../../global/values/priest";

@Component({
  tag: "ms-disciple",
  styleUrls: ["../skills.scss", "disciple.scss"],
  shadow: true
})
export class DiscipleComponent {

  @Prop({ reflectToAttr: true }) level: number = DiscipleValues.minLevel;

  /** @private */ @Prop({ reflectToAttr: true }) max: number = DiscipleValues.maxLevel;
  /** @private */ @Prop() showImage: boolean = true;

  getRequirements(): string[] {
    return [
      `Level ${ this.getLevel() }+`,
      `Celestial Blessings [Level 6+]`,
      `Holy Symbol [Level 4+]`,
    ];
  }

  getLevel(): number {
    return DiscipleValues.levelRequirement[this.level];
  }

  getDurationIncrease(): number {
    return DiscipleValues.duration[this.level];
  }

  render() {
    return (
      <div>
        { (this.showImage) &&
          <ms-icon name="disciple"></ms-icon>
        }
        <ms-skill-overlay heading="Disciple"
                          element="Holy"
                          level={ this.level }
                          passive={ true }
                          requirements={ this.getRequirements() }>
          <ms-icon slot="icon" name="disciple"></ms-icon>
          <div slot="description">
            Increases the duration of Celestial Guardian,
            Celestial Blessings, and Holy Symbol buffs
            by <span>{ this.getDurationIncrease() }%</span>.
          </div>
        </ms-skill-overlay>
      </div>
    );
  }
}
