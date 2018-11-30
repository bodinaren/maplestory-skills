import { Component, Prop } from "@stencil/core";
import { Dash } from "../../../../global/values/assassin";

@Component({
  tag: "ms-dash",
  styleUrls: ["../../skills.scss", "dash.scss"],
  shadow: true
})
export class DashComponent {

  @Prop({ reflectToAttr: true }) level: number = Dash.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Dash.maxLevel;

  render() {
    return [
      <ms-icon name="dash"></ms-icon>,
      <ms-skill-overlay heading={ Dash.name }
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
