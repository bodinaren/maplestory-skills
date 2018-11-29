import { Component, Prop } from "@stencil/core";
import { IllusionValues } from "../../../../global/values/soul-binder";

@Component({
  tag: "ms-illusion",
  styleUrls: ["../../skills.scss", "illusion.scss"],
  shadow: true
})
export class IllusionComponent {

  @Prop({ reflectToAttr: true }) level: number = IllusionValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = IllusionValues.maxLevel;

  render() {
    return [
      <ms-icon name="illusion"></ms-icon>,
      <ms-skill-overlay heading="Illusion"
                        level={ this.level }
                        max={ this.max }>
        <ms-icon slot="icon" name="illusion"></ms-icon>
        <div slot="description">
          Release a mysterious aura from the body,
          flying forward <span>4.5</span> m and leaving an afterimage in your wake.
          Increases evasion by <span>50</span> while moving.
          The skill can be both canceled and triggered immediately while using other skills.
          You are immune to knockback while this skill is active.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
