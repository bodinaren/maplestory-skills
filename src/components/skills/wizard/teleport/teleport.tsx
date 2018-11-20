import { Component, Prop } from "@stencil/core";
import { TeleportValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-teleport",
  styleUrls: ["../../skills.scss", "teleport.scss"],
  shadow: true
})
export class TeleportComponent {

  @Prop({ reflectToAttr: true }) level: number = TeleportValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = TeleportValues.maxLevel;

  render() {
    return [
      <ms-icon name="teleport"></ms-icon>,
      <ms-skill-overlay heading="Teleport"
                        level={ this.level }
                        max={ this.max }>
        <ms-icon slot="icon" name="teleport"></ms-icon>
        <div slot="description">
          Warp yourself <span>4.5</span> m forward. This skill can cancel other skills.
          You will be immune to knockback while this skill is active.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
