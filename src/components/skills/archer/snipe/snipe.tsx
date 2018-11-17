import { Component, Prop } from "@stencil/core";
import { SnipeValues } from "../../../../global/values/archer";

@Component({
  tag: "ms-snipe",
  styleUrls: ["../../skills.scss", "snipe.scss"],
  shadow: true
})
export class SnipeComponent {

  @Prop({ reflectToAttr: true }) level: number = SnipeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SnipeValues.maxLevel;

  render() {
    return [
      <ms-icon name="snipe"></ms-icon>,
      <ms-skill-overlay heading="Snipe"
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="snipe"></ms-icon>
        <div slot="description">
          Take aim and even your breathing to restore <span>7</span> spirit every <span>0.5</span> sec.
          When no enemies are within <span>4</span> m, the amount of spirit restored increases by <span>1</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
