import { Component, Prop } from "@stencil/core";
import { DeathSpinValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-death-spin",
  styleUrls: ["../../skills.scss", "death-spin.scss"],
  shadow: true
})
export class DeathSpinComponent {

  @Prop({ reflectToAttr: true }) level: number = DeathSpinValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = DeathSpinValues.maxLevel;

  getRequirements(): string[] {
    if (DeathSpinValues.levelRequirement[this.level] > 0) {
      return [
        `Level ${ DeathSpinValues.levelRequirement[this.level] }+`,
      ];
    }
  }

  render() {
    return [
      <ms-icon name="death-spin"></ms-icon>,
      <ms-skill-overlay heading="Death Spin"
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        spirit={ 4 }
                        max={ this.max }>
        <ms-icon slot="icon" name="death-spin"></ms-icon>
        <div slot="description">
          Spin your greatsword, dealing <span>{ DeathSpinValues.damage[this.level] }%</span> dark damage
          to <span>8</span> enemies within <span>3</span> m.
          During the attack, press a direction key to move <span>1.6</span> m.
          The distance decreases to <span>1.2</span> m on your second spin and
          to <span>0.8</span> m on your third and subsequent spins.
          Consumes <span>4</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
