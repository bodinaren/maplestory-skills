import { Component, Prop } from "@stencil/core";
import { VoidSlashValues } from "../../../../global/values/berserker";

@Component({
  tag: "ms-void-slash",
  styleUrls: ["../../skills.scss", "void-slash.scss"],
  shadow: true
})
export class VoidSlashComponent {

  @Prop({ reflectToAttr: true }) level: number = VoidSlashValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = VoidSlashValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ VoidSlashValues.levelRequirement[this.level] }+`,
    ];
  }

  render() {
    return [
      <ms-icon name="void-slash"></ms-icon>,
      <ms-skill-overlay heading="Void Slash"
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        weaponRequired="Two-handed Greatsword"
                        requirements={ this.getRequirements() }
                        spirit={ 24 }
                        max={ this.max }>
        <ms-icon slot="icon" name="void-slash"></ms-icon>
        <div slot="description">
          Swing your greatsword upward to deal <span>{ VoidSlashValues.firstDamage[this.level] }%</span> dark damage
          to <span>5</span> enemies up to <span>3</span> m in front of you.
          Press the skill key again to trigger a <span>2-hit</span> combo.
          The second part is two quick swings,
          dealing <span>{ VoidSlashValues.secondDamage[this.level] }%</span> dark damage <span>2</span> times
          to <span>5</span> enemies up to <span>2</span> m in front of you.
          On the first hit, press a direction key to move <span>4</span> m and attack.
          On the second hit, the skill lasts while the skill key is held down.
          You will be immune to knockback while this skill is active.
          The first hit consumes <span>24</span> spirit and the second hit consumes <span>1</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
