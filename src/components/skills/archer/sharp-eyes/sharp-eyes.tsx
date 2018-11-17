import { Component, Prop } from "@stencil/core";
import { SharpEyesValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-sharp-eyes",
  styleUrls: ["../../skills.scss", "sharp-eyes.scss"],
  shadow: true
})
export class SharpEyesComponent {

  @Prop({ reflectToAttr: true }) level: number = SharpEyesValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SharpEyesValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SharpEyesValues.levelRequirement[this.level] }+`,
      `Conditioning [Level 6+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="sharp-eyes"></ms-icon>,
      <ms-skill-overlay heading="Sharp Eyes"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 180 }
                        max={ this.max }>
        <ms-icon slot="icon" name="sharp-eyes"></ms-icon>
        <div slot="description">
          Create a magic seal that affects <span>5</span> tiles around you,
          increasing the critical rate of allies who absorb it
          by <span>{ SharpEyesValues.criticalAllies[this.level] }</span> and
          their accuracy by <span>{ SharpEyesValues.accuracy[this.level] }</span> for <span>180</span> sec.
          The seal lasts for <span>20</span> sec.
          Sharp Eyes also increases critical rate by <span>{ SharpEyesValues.criticalSelf[this.level] }</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
