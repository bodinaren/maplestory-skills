import { Component, Prop } from "@stencil/core";
import { JetBootsValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-jet-boots",
  styleUrls: ["../../skills.scss", "jet-boots.scss"],
  shadow: true
})
export class JetBootsComponent {

  @Prop({ reflectToAttr: true }) level: number = JetBootsValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = JetBootsValues.maxLevel;

  render() {
    return [
      <ms-icon name="jet-boots"></ms-icon>,
      <ms-skill-overlay heading="Jet Boots"
                        level={ this.level }
                        type="Long Range / Physical"
                        max={ this.max }>
        <ms-icon slot="icon" name="jet-boots"></ms-icon>
        <div slot="description">
          Propel <span>6</span> m forward with your jet boots,
          leaving behind a shockwave that deals <span>120%</span> damage
          to <span>5</span> enemies within <span>1.5</span> m.
          Consumes <span>60</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
