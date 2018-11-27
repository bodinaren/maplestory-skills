import { Component, Prop } from "@stencil/core";
import { RuneBalanceValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-rune-balance",
  styleUrls: ["../../skills.scss", "rune-balance.scss"],
  shadow: true
})
export class RuneBalanceComponent {

  @Prop({ reflectToAttr: true }) level: number = RuneBalanceValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RuneBalanceValues.maxLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="rune-balance" sp={ true }></ms-icon>,
      <ms-skill-overlay heading="Rune Balance"
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="rune-balance" sp={ true }></ms-icon>
        <div slot="description">
          Your training allows you to absorb <span>1</span> spirit every <span>0.1</span> sec and
          increases your intelligence by <span>70%</span> of your strength.
        </div>
      </ms-skill-overlay>
    ];
  }
}
