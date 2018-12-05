import { Component, Prop } from "@stencil/core";
import { XSlash } from "../../../../global/values/berserker";

@Component({
  tag: "ms-x-slash",
  styleUrls: ["../../skills.scss", "x-slash.scss"],
  shadow: true
})
export class XSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = XSlash.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = XSlash.maxLevel;

  render() {
    return [
      <ms-icon name="x-slash"></ms-icon>,
      <ms-skill-overlay heading={ XSlash.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        max={ this.max }>
        <ms-icon slot="icon" name="x-slash"></ms-icon>
        <div slot="description">
          Swing your greatsword in an X as you charge forward <span>4.5</span> m,
          dealing <span>75%</span> damage <span>2</span> times to <span>5</span> enemies in your path.
          This skill can cancel other skills.
          You will be immune to knockback while this skill is active.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
