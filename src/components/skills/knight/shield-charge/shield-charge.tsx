import { Component, Prop } from "@stencil/core";
import { ShieldChargeValues } from "../../../../global/values/knight";

@Component({
  tag: "ms-shield-charge",
  styleUrls: ["../../skills.scss", "shield-charge.scss"],
  shadow: true
})
export class ShieldChargeComponent {

  @Prop({ reflectToAttr: true }) level: number = ShieldChargeValues.minLevel;

  @Prop({ reflectToAttr: true }) private max: number = ShieldChargeValues.maxLevel;

  render() {
    return [
      <ms-icon name="shield-charge"></ms-icon>,
      <ms-skill-overlay heading="Shield Charge"
                        level={ this.level }
                        type="Physical"
                        weaponRequired="Off-hand Shield"
                        max={ this.max }>
        <ms-icon slot="icon" name="shield-charge"></ms-icon>
        <div slot="description">
          Charge forward <span>4.5</span> m, dealing <span>70%</span> damage to <span>5</span> enemies
          and knocking them back <span>3</span> m. While charging, you cannot be knocked back.
          This skill can cancel other skills.
          Consumes <span>40</span> stamina.
        </div>
      </ms-skill-overlay>
    ];
  }
}
