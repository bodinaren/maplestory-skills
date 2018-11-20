import { Component, Prop } from "@stencil/core";
import { FlameTornadoValues } from "../../../../global/values/wizard";

@Component({
  tag: "ms-flame-tornado",
  styleUrls: ["../../skills.scss", "flame-tornado.scss"],
  shadow: true
})
export class FlameTornadoComponent {

  @Prop({ reflectToAttr: true }) level: number = FlameTornadoValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = FlameTornadoValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ FlameTornadoValues.levelRequirement[this.level] }+`,
      `Shadow Cutter [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="flame-tornado"></ms-icon>,
      <ms-skill-overlay heading="¤¤¤¤"
                        element="¤¤¤¤"
                        level={ this.level }
                        type="¤¤¤¤"
                        weaponRequired="¤¤¤¤"
                        requirements={ this.getRequirements() }
                        spirit={ 11111 }
                        cooldown={ 11111 }
                        max={ this.max }>
        <ms-icon slot="icon" name="flame-tornado"></ms-icon>
        <div slot="description">
          Gather fire energy from your surroundings to create a huge flame
          whirlwind <span>4.5</span> m in front of you. The flame whirlwind lasts for <span>1.5</span> sec,
          dealing <span>{ FlameTornadoValues.damage[this.level] }%</span> fire damage
          to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.
          Consumes <span>40</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
