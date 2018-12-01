import { Component, Prop } from "@stencil/core";
import { FlameTornado } from "../../../../global/values/wizard";

@Component({
  tag: "ms-flame-tornado",
  styleUrls: ["../../skills.scss", "flame-tornado.scss"],
  shadow: true
})
export class FlameTornadoComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameTornado.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlameTornado.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlameTornado.levelRequirement[this.level] }+`,
      `Flame Wave [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="flame-tornado"></ms-icon>,
      <ms-skill-overlay heading={ FlameTornado.name }
                        element="Fire"
                        level={ this.level }
                        type="Long Range / Magic"
                        weaponRequired="Two-handed Staff"
                        requirements={ this.getRequirements() }
                        spirit={ 40 }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flame-tornado"></ms-icon>
        <div slot="description">
          Gather fire energy from your surroundings to create a huge flame
          whirlwind <span>4.5</span> m in front of you. The flame whirlwind lasts for <span>1.5</span> sec,
          dealing <span>{ FlameTornado.values.damage[this.level] }%</span> fire damage
          to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.
          Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
