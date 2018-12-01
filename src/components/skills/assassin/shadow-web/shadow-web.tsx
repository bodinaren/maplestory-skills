import { Component, Prop } from "@stencil/core";
import { ShadowWeb } from "../../../../global/values/assassin";

@Component({
  tag: "ms-shadow-web",
  styleUrls: ["../../skills.scss", "shadow-web.scss"],
  shadow: true
})
export class ShadowWebComponent {

  @Prop({ reflectToAttr: true }) level: number = ShadowWeb.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShadowWeb.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ShadowWeb.levelRequirement[this.level] }+`,
      `Fatal Strikes [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="shadow-web"></ms-icon>,
      <ms-skill-overlay heading={ ShadowWeb.name }
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        requirements={ this.getRequirements() }
                        spirit={ 28 }
                        cooldown={ 7 }
                        max={ this.max }>
        <ms-icon slot="icon" name="shadow-web"></ms-icon>
        <div slot="description">
          Summon a mirror image and backstep <span>3</span> m.
          The clone explodes after <span>1</span> sec, tossing out a web that
          deals <span>{ ShadowWeb.values.damage[this.level] }%</span> dark energy to <span>5</span> enemies
          within <span>3</span> m and entangles them, reducing movement speed and jump power
          by <span>{ ShadowWeb.values.movement[this.level] }%</span> for <span>4</span> sec and dealing an
          additional <span>{ ShadowWeb.values.additionalDamage[this.level] }%</span> damage
          every sec for <span>4</span> sec. This skill can cancel other skills.
          Consumes <span>28</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
