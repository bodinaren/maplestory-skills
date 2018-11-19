import { Component, Prop } from "@stencil/core";
import { DashValues } from "../../../../global/values/assassin";

@Component({
  tag: "ms-dash",
  styleUrls: ["../../skills.scss", "dash.scss"],
  shadow: true
})
export class DashComponent {

  @Prop({ reflectToAttr: true }) level: number = DashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DashValues.maxLevel;

  render() {
    return [
      <ms-icon name="dash"></ms-icon>,
      <ms-skill-overlay heading="Dash"
                        level={ this.level }
                        max={ this.max }>
        <ms-icon slot="icon" name="dash"></ms-icon>
        <div slot="description">
          Deftly leap forward <span>4.5</span> m.
          This skill can cancel other skills.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
