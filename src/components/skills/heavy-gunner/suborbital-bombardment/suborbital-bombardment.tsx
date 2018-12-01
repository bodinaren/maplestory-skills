import { Component, Prop } from "@stencil/core";
import { SuborbitalBombardment } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-suborbital-bombardment",
  styleUrls: ["../../skills.scss", "suborbital-bombardment.scss"],
  shadow: true
})
export class SuborbitalBombardmentComponent {

  @Prop({ reflectToAttr: true }) level: number = SuborbitalBombardment.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = SuborbitalBombardment.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ SuborbitalBombardment.levelRequirement[this.level] }+`,
      `Stun Grenades [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="suborbital-bombardment"></ms-icon>,
      <ms-skill-overlay heading={ SuborbitalBombardment.name }
                        element="Electric"
                        level={ this.level }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        spirit={ 20 }
                        cooldown={ 30 }
                        max={ this.max }>
        <ms-icon slot="icon" name="suborbital-bombardment"></ms-icon>
        <div slot="description">
          Summon a satellite to fire lasers at the closest enemy within <span>8</span> m,
          dealing <span>{ SuborbitalBombardment.values.damage[this.level] }%</span> electric damage
          to <span>5</span> enemies within <span>2.25</span> m of your initial target
          every sec for <span>{ SuborbitalBombardment.values.duration[this.level] }</span> sec.
          If you have the Pulse Energy upgrade, the enhanced laser deals
          an additional <span>{ SuborbitalBombardment.values.additionalDamage[this.level] }%</span> electric damage.
          Consumes <span>20</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
