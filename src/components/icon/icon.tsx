import { h, Component, Prop, getAssetPath } from "@stencil/core";

@Component({
  tag: "ms-icon",
  styleUrl: "icon.css",
  shadow: true
})
export class IconComponent {

  @Prop({ reflectToAttr: true }) name: string;
  @Prop({ reflectToAttr: true }) sp: boolean = false;

  render() {
    return [
      <img src={ getAssetPath(`skills/${this.name}.png`) } />,
      this.sp && <img src={ getAssetPath(`sp.png`) } />,
    ];
  }
}
