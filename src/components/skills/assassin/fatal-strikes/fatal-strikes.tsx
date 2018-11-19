import { Component, Prop } from "@stencil/core";
import { FatalStrikesValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-fatal-strikes",
  styleUrls: ["../../skills.scss", "fatal-strikes.scss"],
  shadow: true
})
export class FatalStrikesComponent {

  @Prop({ reflectToAttr: true }) level: number = FatalStrikesValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FatalStrikesValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FatalStrikesValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="fatal-strikes"></ms-icon>,
      <ms-skill-overlay heading="Fatal Strikes"
                        level={ this.level }
                        requirements={ this.getRequirements() }
                        cooldown={ 60 }
                        max={ this.max }>
        <ms-icon slot="icon" name="fatal-strikes"></ms-icon>
        <div slot="description">
          Utilize dark magic to strengthen your secret assassin techniques,
          allowing you to identify enemy weak spots.
          All attacks become critical hits for <span>{ FatalStrikesValues.duration[this.level] }</span> sec.
        </div>
      </ms-skill-overlay>
    ];
  }
}
