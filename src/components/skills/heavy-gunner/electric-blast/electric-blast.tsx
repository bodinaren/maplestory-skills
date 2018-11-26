import { Component, Prop } from "@stencil/core";
import { ElectricBlastValues } from "../../../../global/values/heavy-gunner";

@Component({
  tag: "ms-electric-blast",
  styleUrls: ["../../skills.scss", "electric-blast.scss"],
  shadow: true
})
export class ElectricBlastComponent {

  @Prop({ reflectToAttr: true }) level: number = ElectricBlastValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ElectricBlastValues.maxLevel;

  getRequirements(): string[] {
    return [
      `Level ${ ElectricBlastValues.levelRequirement[this.level] }+`,
      `Magnetic Bomb [Level 4+]`,
    ];
  }

  render() {
    return [
      <ms-icon name="electric-blast"></ms-icon>,
      <ms-skill-overlay heading="Electric Blast"
                        element="Electric"
                        level={ this.level }
                        type="Long Range / Physical"
                        weaponRequired="Two-handed Cannon"
                        requirements={ this.getRequirements() }
                        cooldown={ 16 }
                        max={ this.max }>
        <ms-icon slot="icon" name="electric-blast"></ms-icon>
        <div slot="description">
          Activate the compact particle accelerator on your cannon to gather electricity and shoot,
          dealing <span>{ ElectricBlastValues.stage1[this.level] }%</span> electric damage
          to <span>3</span> enemies up to <span>9</span> m in front of you and knocking them back <span>1.5</span> m.
          Hold the skill key down for <span>0.5</span> sec to enhance the effect to Stage 2 and
          deal <span>{ ElectricBlastValues.stage2[this.level] }%</span> electric damage <span>2</span> times
          to <span>5</span> enemies up to <span>9</span> m in front of you and knock them back <span>3</span> m.
          Hold the skill key down for <span>0.5</span> sec at Stage 2 to enhance the effect to Stage 3 and
          deal <span>{ ElectricBlastValues.stage3[this.level] }%</span> electric damage <span>3</span> times
          to <span>8</span> enemies up to <span>9</span> m in front of you and knock them back <span>4.5</span> m.
          You will fire automatically when the skill key is held down for <span>3</span> sec at Stage 3.
        </div>
      </ms-skill-overlay>
    ];
  }
}
