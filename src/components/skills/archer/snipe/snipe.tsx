import { Component, Prop } from "@stencil/core";
import { Snipe } from "../../../../global/values/archer";

@Component({
  tag: "ms-snipe",
  styleUrls: ["../../skills.scss", "snipe.scss"],
  shadow: true
})
export class SnipeComponent {

  @Prop({ reflectToAttr: true }) level: number = Snipe.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = Snipe.maxLevel;

  hostData() { return { "passive": "true" }; }

  render() {
    return [
      <ms-icon name="snipe" sp={ true }></ms-icon>,
      <ms-skill-overlay heading={ Snipe.name }
                        level={ this.level }
                        passive={ true }
                        max={ this.max }>
        <ms-icon slot="icon" name="snipe" sp={ true }></ms-icon>
        <div slot="description">
          Take aim and even your breathing to restore <span>7</span> spirit every <span>0.5</span> sec.
          When no enemies are within <span>4</span> m, the amount of spirit restored increases by <span>1</span>.
        </div>
      </ms-skill-overlay>
    ];
  }
}
