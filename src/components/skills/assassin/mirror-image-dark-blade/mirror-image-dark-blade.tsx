import { Component, Prop } from "@stencil/core";
import { MirrorImageDarkBlade } from "../../../../global/values/assassin";

@Component({
  tag: "ms-mirror-image-dark-blade",
  styleUrls: ["../../skills.scss", "mirror-image-dark-blade.scss"],
  shadow: true
})
export class MirrorImageDarkBladeComponent {

  @Prop({ reflectToAttr: true }) level: number = MirrorImageDarkBlade.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MirrorImageDarkBlade.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ MirrorImageDarkBlade.levelRequirement[this.level] }+`,
      `Shadow Web [Level 2+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="mirror-image-dark-blade"></ms-icon>,
      <ms-skill-overlay heading={ MirrorImageDarkBlade.name }
                        element="Dark"
                        level={ this.level }
                        type="Close Range / Physical"
                        requirements={ this.getRequirements() }
                        cooldown={ 40 }
                        max={ this.max }>
        <ms-icon slot="icon" name="mirror-image-dark-blade"></ms-icon>
        <div slot="description">
          Marks a <span>2.25</span> m radius spot on the ground with an insignia of darkness for <span>10</span> sec,
          dealing <span>{ MirrorImageDarkBlade.values.damage[this.level] }%</span> dark damage
          to <span>3</span> enemies within the mark by sending a mirror image to attack them.
          This skill also brands enemies, reducing their accuracy by <span>20</span> for <span>10</span> sec.
          All attacks dealt to branded enemies have a <span>30%</span> chance to summon additional
          mirror images to attack them for <span>23%</span> dark damage <span>4</span> times.
          Summoned mirror images can only appear once every <span>1.5</span> sec.
          The accuracy reduction does not stack.
        </div>
      </ms-skill-overlay>
    ];
  }
}
