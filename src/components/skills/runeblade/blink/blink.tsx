import { Component, Prop } from "@stencil/core";
import { Blink } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-blink",
  styleUrls: ["../../skills.scss", "blink.scss"],
  shadow: true
})
export class BlinkComponent {

  @Prop({ reflectToAttr: true }) level: number = Blink.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Blink.maxLevel;

  render() {
    return [
      <ms-icon name="blink"></ms-icon>,
      <ms-skill-overlay heading={ Blink.name }
                        level={ this.level }
                        max={ this.max }>
        <ms-icon slot="icon" name="blink"></ms-icon>
        <div slot="description">
          Teleport to the nearest enemy within <span>6</span> m. If there are no enemies in range,
          teleport <span>3</span> m instead. This skill can cancel other skills.
          You are immune to knockback while casting this skill.
        </div>
      </ms-skill-overlay>
    ];
  }
}
