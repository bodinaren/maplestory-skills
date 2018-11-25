import { Component, Prop } from "@stencil/core";
import { MindStealerValues } from "../../../../global/values/thief";

@Component({
  tag: "ms-mind-stealer",
  styleUrls: ["../../skills.scss", "mind-stealer.scss"],
  shadow: true
})
export class MindStealerComponent {

  @Prop({ reflectToAttr: true }) level: number = MindStealerValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = MindStealerValues.maxLevel;

  render() {
    return [
      <ms-icon name="mind-stealer"></ms-icon>,
      <ms-skill-overlay heading="Mind Stealer"
                        level={ this.level }
                        type="Close Range / Physical"
                        cooldown={ 3 }
                        max={ this.max }>
        <ms-icon slot="icon" name="mind-stealer"></ms-icon>
        <div slot="description">
          Nimbly move forward <span>4.5</span> m, dealing <span>40%</span> damage to <span>3</span> enemies
          in your path and absorbing their energy to restore <span>10</span> spirit per target.
        </div>
      </ms-skill-overlay>
    ];
  }
}
