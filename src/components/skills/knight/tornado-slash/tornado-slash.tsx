import { Component, Prop } from "@stencil/core";
import { TornadoSlash } from "../../../../global/values/knight";

@Component({
  tag: "ms-tornado-slash",
  styleUrls: ["../../skills.scss", "tornado-slash.scss"],
  shadow: true
})
export class TornadoSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = TornadoSlash.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = TornadoSlash.maxLevel;

  getRequirements(): string[] {
    if (TornadoSlash.levelRequirement[this.level] > 0) {
      return [
        `Level ${ TornadoSlash.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="tornado-slash"></ms-icon>,
      <ms-skill-overlay heading={ TornadoSlash.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        spirit={ 12 }
                        max={ this.max }>
        <ms-icon slot="icon" name="tornado-slash"></ms-icon>
        <div slot="description">
          Perform a spin slash,
          dealing <span>{ TornadoSlash.values.damage[this.level] }%</span> damage <span>3</span> times
          to <span>8</span> enemies within <span>3</span> m and pulling them in <span>1</span> m.
          Consumes <span>12</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
