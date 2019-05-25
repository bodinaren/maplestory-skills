import { h, Host, Component, Prop } from "@stencil/core";
import { getOptimizedAssetPath } from "../../global/utils";

@Component({
  tag: "ms-icon",
  styleUrl: "icon.css",
  shadow: true
})
export class IconComponent {

  @Prop({ reflectToAttr: true }) name: string;
  @Prop({ reflectToAttr: true }) sp: boolean = false;

  render() {
    return (
      <Host>
        <img src={ getOptimizedAssetPath(`assets/skills/${this.name}.png`) } />
        { this.sp &&
          <img src={ getOptimizedAssetPath(`assets/sp.png`) } />
        }
      </Host>
    );
  }
}
