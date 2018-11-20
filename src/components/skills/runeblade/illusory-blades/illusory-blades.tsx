import { Component, Prop } from "@stencil/core";
import { IllusoryBladesValues } from "../../../../global/values/runeblade";

@Component({
  tag: "ms-illusory-blades",
  styleUrls: ["../../skills.scss", "illusory-blades.scss"],
  shadow: true
})
export class IllusoryBladesComponent {

  @Prop({ reflectToAttr: true }) level: number = IllusoryBladesValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IllusoryBladesValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ IllusoryBladesValues.levelRequirement[this.level] }+`,
      `Flurry [Level 4+]`,
      `Whirling Blades [Level 3+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="illusory-blades"></ms-icon>,
      <ms-skill-overlay heading="Illusory Blades"
                        level={ this.level }
                        type="Long Range / Magic"
                        requirements={ this.getRequirements() }
                        spirit={ 15 }
                        cooldown={ 18 }
                        max={ this.max }>
        <ms-icon slot="icon" name="illusory-blades"></ms-icon>
        <div slot="description">
          Conjure <span>5</span> arcane blades.
          Once per sec, <span>1</span> blade flies at the closest enemy within <span>7.5</span> m,
          dealing <span>{ IllusoryBladesValues.damage[this.level] }%</span> damage.
          Consumes <span>15</span> spirit.
        </div>
      </ms-skill-overlay>
    ];
  }
}
