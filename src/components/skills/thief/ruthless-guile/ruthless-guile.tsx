import { Component, Prop } from "@stencil/core";
import { RuthlessGuile } from "../../../../global/values/thief";

@Component({
  tag: "ms-ruthless-guile",
  styleUrls: ["../../skills.scss", "ruthless-guile.scss"],
  shadow: true
})
export class RuthlessGuileComponent {

  @Prop({ reflectToAttr: true }) level: number = RuthlessGuile.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = RuthlessGuile.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ RuthlessGuile.levelRequirement[this.level] }+`,
      `Poison Vial [Level 6+]`,
      `Poison Edge [Level 6+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="ruthless-guile"></ms-icon>,
      <ms-skill-overlay heading={ RuthlessGuile.name }
                        element="Toxic"
                        level={ this.level }
                        type="Physical"
                        requirements={ this.getRequirements() }
                        max={ this.max }>
        <ms-icon slot="icon" name="ruthless-guile"></ms-icon>
        <div slot="description">
          Prey on the weaknesses of your enemy to
          deal <span>{ RuthlessGuile.values.damage[this.level] }%</span> additional poison damage
          to targets afflicted with Poison Blow or Poison Vial.
        </div>
      </ms-skill-overlay>
    ];
  }
}
