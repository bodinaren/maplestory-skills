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
        </div>
      </ms-skill-overlay>
    ];
  }
}
