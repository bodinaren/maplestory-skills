import { Component, Prop } from "@stencil/core";
import { TyphoonSlash } from "../../../../global/values/knight";

@Component({
  tag: "ms-typhoon-slash",
  styleUrls: ["../../skills.scss", "typhoon-slash.scss"],
  shadow: true
})
export class TyphoonSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = TyphoonSlash.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = TyphoonSlash.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ TyphoonSlash.levelRequirement[this.level] }+`,
      `Tornado Slash [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="typhoon-slash"></ms-icon>,
      <ms-skill-overlay heading={ TyphoonSlash.name }
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Main Hand Longsword"
                        requirements={ this.getRequirements() }
                        spirit={ 50 }
                        max={ this.max }>
        <ms-icon slot="icon" name="typhoon-slash"></ms-icon>
        <div slot="description">
          Spin with your weapon out,
          dealing <span>{ TyphoonSlash.values.damage[this.level] }%</span> damage <span>5</span> times
          to <span>8</span> enemies within <span>3</span> m. Each hit pulls them in <span>1</span> m.
          During the attack, press a direction key to move <span>4.5</span> m.
          Consumes <span>50</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
