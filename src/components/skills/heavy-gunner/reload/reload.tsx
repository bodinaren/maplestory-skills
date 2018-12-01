import { Component, Prop } from "@stencil/core";
import { Reload } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-reload",
  styleUrls: ["../../skills.scss", "reload.scss"],
  shadow: true
})
export class ReloadComponent {

  @Prop({ reflectToAttr: true }) level: number = Reload.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Reload.maxLevel;

  render() {
    return [
      <ms-icon name="reload" sp={ true }></ms-icon>,
      <ms-skill-overlay heading={ Reload.name }
                        level={ this.level }
                        weaponRequired="Two-handed Cannon"
                        max={ this.max }>
        <ms-icon slot="icon" name="reload" sp={ true }></ms-icon>
        <div slot="description">
          Rotate the cannon's ammo cannisters <span>2</span> times
          in <span>0.25</span> sec intervals to maintain them,
          restoring <span>50</span> spirit each time,
          for a total of <span>100</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
